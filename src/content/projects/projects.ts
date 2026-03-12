import type { Project } from "./schema";

export const projects: Project[] = [
  {
    id: "fis-design-systems",
    company: {
      name: "FIS",
      brandColor: "#0e8800",
      logoSrc: "/images/26e3d15a1b2ac270c71bcfb2c1560331f46f1631.png",
    },
    tags: ["Design Systems", "Product Design"],
    card: {
      title: "Design Systems",
      description:
        "Creating cohesive product experiences at scale through motion, components, and foundational design systems, and led FIS’s conversational UI initiative.",
      companyLine: "FIS",
      image: {
        src: "/images/103c6b0f8112ed8b255b19e5e78b6f7e18062bcf.png",
        alt: "FIS Design Systems interface",
        focalPoint: "center",
      },
    },
    primaryLink: {
      kind: "figma",
      title: "View Case Study",
      url: "https://www.figma.com/proto/fis-design-systems",
      trackingLabel: "fis_design_systems",
    },
    chat: {
      includeInChat: true,
    },
    prototype: {
      includeInPrototype: true,
    },
    status: "featured",
  },
  {
    id: "yahoo-home",
    company: {
      name: "Yahoo",
      brandColor: "#7d2dff",
      logoSrc: "/images/ff1a32b5c7bc90aa763a1bbb4dc4958323590f04.png",
    },
    tags: ["Product Design", "Responsive"],
    card: {
      title: "Yahoo Home",
      description:
        "Launched a new yahoo.com for millions of users, with new features, design improvements, and a wealth of opportunities to learn from our users.",
      companyLine: "Yahoo",
      image: {
        src: "/images/4657343b034501e6fabae02d947ba0e92c1f97d8.png",
        alt: "Yahoo homepage redesign",
        focalPoint: "center",
      },
    },
    primaryLink: {
      kind: "figma",
      title: "View Case Study",
      url: "https://www.figma.com/proto/yahoo-home",
      trackingLabel: "yahoo_home",
    },
    chat: {
      includeInChat: true,
    },
    prototype: {
      includeInPrototype: true,
    },
    status: "featured",
  },
  {
    id: "meta-facebook-stars",
    company: {
      name: "Meta",
      brandColor: "#0083ff",
      logoSrc: "/images/6532e765b16cf34e53e0cf6ec8fecaa2077d4919.png",
    },
    tags: ["Product Design", "Research"],
    card: {
      title: "Facebook Stars",
      description:
        "Designed monetization features for Stars on Facebook Live, enabling creators to earn across the Facebook platform through thoughtful product and interaction design.",
      companyLine: "Meta",
      image: {
        src: "/images/7cf6b7e6d89d754e1405c673894768679e5c2178.png",
        alt: "Facebook Stars monetization features",
        focalPoint: "center",
      },
    },
    primaryLink: {
      kind: "figma",
      title: "View Case Study",
      url: "https://www.figma.com/proto/meta-facebook-stars",
      trackingLabel: "meta_facebook_stars",
    },
    chat: {
      includeInChat: true,
    },
    prototype: {
      includeInPrototype: true,
    },
    status: "featured",
  },
  {
    id: "siriusxm-search",
    company: {
      name: "SiriusXM",
      brandColor: "#0201f5",
      logoSrc: "/images/50f7dc12c9f10ccd5aed993a7f9ea6b73ec09786.png",
    },
    tags: ["Product Design", "Prototyping"],
    card: {
      title: "Search and Entity Pages",
      description:
        "Designed artist pages and the mobile search experience for SiriusXM's app (launched December 2023), defining information architecture, evolving designs from low to high fidelity, and building high-complexity Origami prototypes for user testing.",
      companyLine: "SiriusXM",
      image: {
        src: "/images/c4eda307ad3e7b74272d5f9918c0340a7bae8909.png",
        alt: "SiriusXM search and artist pages",
        focalPoint: "center",
      },
    },
    primaryLink: {
      kind: "figma",
      title: "View Case Study",
      url: "https://www.figma.com/proto/siriusxm-search",
      trackingLabel: "siriusxm_search",
    },
    chat: {
      includeInChat: true,
    },
    prototype: {
      includeInPrototype: true,
    },
    status: "featured",
  },
];
