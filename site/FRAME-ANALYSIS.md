# Frame analysis — Aşkın Hukuk

Source: `Lawyer_wearing_robe_holding_scale_20260914215900.mp4` (1920 × 1080, 24 fps, 8 s, 192 frames). Third source used for this hero; supersedes `Man_putting_on_lawyer_robe_20260914212611.mp4` (144 frames) and the original `ezgif-1334075d04afd406-jpg.zip` (1280 × 720, caused upscaling blur).

All 192 frames were extracted with `ffmpeg` and reviewed frame-by-frame (full contact sheets, brightened low-light passes, and tight crops on hands/face/scale/nameplate across consecutive frames) specifically to check for AI-generation defects — warped hands, extra fingers, morphing objects, flicker. None found: hand-to-scale grip stays anatomically consistent across the full pickup-and-raise sequence, the desk nameplate reads correctly ("Av. ÖMER FARUK AŞKIN") once out of motion blur, and the dusk sky darkens smoothly with no flicker. The only soft spot is ordinary camera motion blur during the fast entrance walk (frames ~1–25) — normal, not an AI artifact — so it wasn't specifically excluded, just not over-sampled.

## Observed story

| Source frames | Actual event |
|---|---|
| 001–030 | Man walks in from the right toward a robe hanging on a stand (fast walk, natural motion blur). |
| 031–048 | Reaches for and lifts the robe off the hanger. |
| 049–072 | Pulls the robe onto his shoulders while starting to walk again. |
| 073–108 | Walks across the office toward the desk/window; sky visible through windows darkens from sunset to dusk. |
| 109–127 | Reaches down and picks up a gold balance scale from the desk. |
| 128–192 | Raises and holds the scale at the window; final composition against the city skyline. |

## Sampling and assets

106 frames selected by accumulated inter-frame RGB difference (sublinear weight) plus explicit stage-boundary frames, out of 192 source frames. Desktop assets are full 1920 × 1080 WebP quality 88 (matches source resolution, no upscaling). Mobile assets are a native 760 × 1080 **portrait crop** (not a landscape downscale) — wider than the previous 608 px crop because this shot has the subject walking across more of the frame's width, so a wider window was needed to keep him in frame throughout, not just in the final held pose. WebP quality 84. Total payload: ~9.0 MB desktop + ~3.3 MB mobile.

`public/frames/manifest.json` is authoritative. The generation script (Node + `sharp`, since no Python is installed on this machine) is not checked into the repo; `analysis/prepare_frames.py` describes the original 1280×720/Python pipeline for historical reference only and no longer matches the current assets.

## Runtime

Native scroll drives a sticky canvas over a 500svh desktop / 420svh mobile track. A brief entrance hold precedes motion. Final frame is reached at 83% progress, brand reveal is held, then a dark green fade joins the manifesto. No autoplay or scroll hijacking. Text masks follow the same scroll position.

Compressed frame blobs preload with three background workers. Only neighboring frames decode. Cache is capped at 20 desktop / 12 mobile images; old bitmaps are closed. DPR is capped at 2. Breakpoint changes rebuild the player with appropriate resolution. ResizeObserver and resize events redraw cover geometry. Failed frames retain the last usable frame/poster; manifest failure uses a static final composition and a readable status. Reduced-motion uses only the static final and removes the long scroll track.

Mobile framing uses 76% viewport image height with a lower text area and central focal point, keeping the character, robe and scale in view. It deliberately does not attempt to show the entire wide office on a narrow screen.

## Content status

Duru Hukuk, team identities, statistics and contact address are demonstration content. They are labelled as such. Publication dialogs contain generic editorial sample copy, without claimed current legislation. Real contact details are required before public use.
