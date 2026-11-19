BEACHSIDE ROOFING — RECRUITMENT EXPLAINER
Standalone page + film package
Makaha Angels Productions · 19 November 2026

WHAT THIS IS
------------
The explainer page and its 1:35 film, packaged so they work on their own — no
server, no login, no link into the journey MAP. It is the piece that can go in an
email or sit in front of a mockup review without exposing the full recruitment
walkthrough.

WHAT IS INSIDE
--------------
index.html                  The page. Open this.
explainer.css               Presentation.
explainer.js                Player, chapters, reveals.
explainer.config.js         All copy and chapter timings in one file.
media/beachside-explainer-captioned.mp4    Film with burned captions (7.5 MB)
media/beachside-explainer-clean.mp4        Film without captions (7.3 MB)
media/beachside-explainer-720p.mp4         Lighter review cut (3.3 MB)
media/poster.jpg                           Poster frame
media/beachside-explainer.vtt              Captions for the player
media/beachside-explainer.srt              Captions for re-editing
media/transcript.txt                       Narration as text
media/board-branded.png                    The branded process board

HOW TO USE IT
-------------
For email: attach media/beachside-explainer-captioned.mp4 directly. If the inbox
has a size limit, use the 720p cut.

For a mockup or review: unzip the folder and double-click index.html. It opens in
the browser and plays. Seeking, chapters and downloads all work from the local
file — no internet connection needed beyond the web font, which falls back to a
system sans if offline.

To host it: upload the whole folder to any static host (Netlify, Cloudflare Pages,
S3, nginx) and point the domain at index.html. Make sure the host supports HTTP
Range requests — most do; Python's built-in `http.server` does not, and seeking
will misbehave there even though playback works.

WHAT IS DELIBERATELY NOT HERE
-----------------------------
The journey MAP, the landing page, the questionnaire flow and the live preview
link were removed. The page cannot navigate into the MAP, and no file in this
folder references the private site. That was the point: show the thinking without
giving away the system.

The page also carries a noindex tag, so if it is ever hosted publicly it will not
be indexed.

A NOTE ON ACCESS
----------------
This folder is unprotected by design — it is a shareable artifact. The full
project stays private and owner-only. Do not add the MAP to this folder; if the
MAP ever needs to be shown, it goes back through the authenticated project.

REBUILDING OR RE-SKINNING
-------------------------
Copy and timings live in explainer.config.js. The film can be rebuilt from the
private archive (stage.html + render_frames.py) — see RECOVERY.md there. The
page layout itself is explainer.js + explainer.css; changing brand colours means
editing the CSS variables at the top of explainer.css.
