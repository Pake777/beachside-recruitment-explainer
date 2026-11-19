/*
 * Beachside Recruitment Explainer — content configuration
 * ------------------------------------------------------
 * This file is the single source of truth for the page. To re-skin the page for
 * another business, copy this file, replace the brand tokens, copy, video and
 * image paths, and publish. No component code needs to change.
 */
window.EXPLAINER_CONFIG = {
  brand: {
    word: "BEACHSIDE",
    sub: "ROOFING",
    accent: "#005ACA",
    accentBright: "#2E86FF",
    title: "Beachside Roofing — From awareness to qualified hires"
  },

  meta: {
    label: "Recruitment · Concept",
    date: "November 2026",
    preparedFor: "Prepared for Tony & James"
  },

  hero: {
    kicker: "A short walkthrough",
    title: "From awareness",
    titleAccent: "to qualified hires.",
    lede:
      "Recruitment marketing, the Join the Crew page, and a custom HR recruitment system — shown as one line, from first look to the hire.",
    secondary:
      "Ninety-five seconds, narrated, with captions built in. A clean cut without captions is available below."
  },

  video: {
    src: "media/beachside-explainer-captioned.mp4",
    captioned: "media/beachside-explainer-captioned.mp4",
    poster: "media/poster.jpg",
    captions: "media/beachside-explainer.vtt",
    duration: "1:35",
    chapters: [
      { t: 0, label: "Opening" },
      { t: 12, label: "The gap" },
      { t: 18, label: "The whole line" },
      { t: 23, label: "Discovery" },
      { t: 32, label: "Join the Crew" },
      { t: 40, label: "Tony's workflow" },
      { t: 49, label: "The opportunity" },
      { t: 68, label: "What's covered" },
      { t: 84, label: "Close" }
    ]
  },

  downloads: [
    { label: "Captioned MP4", href: "media/beachside-explainer-captioned.mp4", note: "Captions burned in" },
    { label: "Clean MP4", href: "media/beachside-explainer-clean.mp4", note: "No burned captions" },
    { label: "Captions (VTT)", href: "media/beachside-explainer.vtt", note: "For the player" },
    { label: "Captions (SRT)", href: "media/beachside-explainer.srt", note: "For re-editing" },
    { label: "Transcript", href: "media/transcript.txt", note: "Plain text" }
  ],

  steps: [
    {
      n: "01",
      title: "Discovery",
      sub: "Getting noticed",
      bullets: ["Social media and short video", "QR codes on job sites and at events", "Community and career fairs"]
    },
    {
      n: "02",
      title: "Join the Crew",
      sub: "The page that already exists",
      bullets: ["Culture film", "Open positions", "Apply — already in website scope"]
    },
    {
      n: "03",
      title: "Tony's workflow",
      sub: "Where it lands today",
      bullets: ["Applications arrive", "Review and screen", "Interviews and hire"]
    },
    {
      n: "04",
      title: "The opportunity",
      sub: "A custom recruitment system",
      bullets: ["Structured questions before the first call", "A summary Tony can use", "A record of where good people came from"]
    }
  ],

  board: {
    src: "media/board-branded.png",
    caption:
      "The one-page version of this process, with the Beachside wordmark added for use in email and print.",
    href: "media/board-branded.png"
  },

  scope: [
    {
      tag: "Already in website scope",
      title: "Join the Crew",
      bullets: [
        "Careers page and culture film",
        "Open positions and Apply action",
        "Application destination, per Tony's process"
      ],
      tone: "on"
    },
    {
      tag: "Separate, optional build",
      title: "Recruitment system",
      bullets: [
        "Structured intake and follow-up questions",
        "HR summary and pipeline view",
        "Source and conversion reporting"
      ],
      tone: "off"
    }
  ],

  notes: [
    "Beachside HR makes every hiring decision. The system supports the conversation; it does not replace judgement.",
    "The demo uses fictional applicants and is not live software. No applicant data is saved or sent.",
    "The QR code in the video is illustrative. It is not connected to a live destination yet."
  ],

  next: {
    label: "Next step",
    text: "A 30-minute walkthrough with Tony — then a one-page scope note with timeline and cost.",
    contact: "Pākē Salmon · Makaha Angels Productions"
  },

  links: {
    preview: "",
    previewLabel: ""
  },

  footer: {
    left: "Makaha Angels Productions",
    right: "Concept / Confidential — not for production use"
  }
};
