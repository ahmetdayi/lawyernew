from pathlib import Path
from zipfile import ZipFile
from PIL import Image, ImageChops, ImageStat
import io, json, bisect

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'site/public/frames'
OUT.mkdir(parents=True, exist_ok=True)
z = ZipFile(ROOT / 'ezgif-1334075d04afd406-jpg.zip')
names = sorted(n for n in z.namelist() if n.endswith('.jpg'))
images = [Image.open(io.BytesIO(z.read(n))).convert('RGB') for n in names]
thumbs = [im.resize((160, 90)) for im in images]
motion = [0.0] + [sum(ImageStat.Stat(ImageChops.difference(a,b)).mean)/3 for a,b in zip(thumbs,thumbs[1:])]
cumulative = [0.0]
for m in motion[1:]: cumulative.append(cumulative[-1] + max(.28,m)**.7)
critical = {0, 59, 74, 100, 119, 144, 155, 180, 197, 213, 231, 246, 263, 282, 299}
selected = sorted(critical | {bisect.bisect_left(cumulative, cumulative[-1]*i/115) for i in range(116)})
def stage(i):
    for end, label in [(59,'approach'),(74,'reaching'),(119,'robe_pickup'),(197,'robe_wearing'),(231,'robed_pause'),(263,'scale_raise'),(299,'final_scale')]:
        if i <= end: return label
manifest=[]
for i in selected:
    name=f'{i+1:03}.webp'
    images[i].save(OUT/name,'WEBP',quality=88,method=6)
    images[i].resize((896,504),Image.Resampling.LANCZOS).save(OUT/f'm-{name}','WEBP',quality=84,method=6)
    manifest.append({'source':names[i],'frame':i+1,'src':f'/frames/{name}','mobile':f'/frames/m-{name}','stage':stage(i),'time':round(i/299,6),'motion':round(motion[i],3)})
(OUT/'manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
images[0].save(OUT/'poster.jpg',quality=92)
images[-1].save(OUT/'final.jpg',quality=92)
print(json.dumps({'sourceCount':len(names),'selected':len(selected),'desktopBytes':sum((OUT/f'{i+1:03}.webp').stat().st_size for i in selected),'mobileBytes':sum((OUT/f'm-{i+1:03}.webp').stat().st_size for i in selected),'motionRange':[min(motion[1:]),max(motion)]}))
(ROOT/'analysis/motion.json').write_text(json.dumps(motion))
