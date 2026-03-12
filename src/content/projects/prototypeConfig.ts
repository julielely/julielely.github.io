import type { ProjectId } from "./schema";

export interface PrototypeEmbed {
  provider: "iframe" | "video" | "origami";
  src: string;
  title: string;
  aspectRatio?: string;
}

export interface PrototypePatch {
  imageSrc: string;
  imageAlt: string;
  caption?: string;
}

export interface PrototypeConfig {
  embed: PrototypeEmbed;
  patch: PrototypePatch;
  carouselProjectIds: ProjectId[];
}

export const prototypeConfig: PrototypeConfig = {
  embed: {
    provider: "iframe",
    src: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/sample-prototype",
    title: "Interactive Prototype",
    aspectRatio: "16/9",
  },
  patch: {
    imageSrc: "/images/prototype-patch.jpg",
    imageAlt: "Prototype interaction detail showing micro-animation",
    caption: "Micro-interactions designed in Origami Studio",
  },
  carouselProjectIds: [
    "yahoo-home",
    "fis-design-systems",
    "meta-facebook-stars",
    "siriusxm-search",
  ],
};
