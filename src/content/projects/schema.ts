export type ProjectId = string;

export interface Company {
  name: string;
  logoSrc?: string;
  brandColor?: string;
}

export interface Metric {
  label: string;
  value: string;
}

export type Tag =
  | "Product Design"
  | "Design Systems"
  | "Conversational UI"
  | "Prototyping"
  | "Motion"
  | "Responsive"
  | "Ads"
  | "Growth"
  | "Research";

export interface ProjectLink {
  kind: "figma";
  title: string;
  url: string;
  note?: string;
  trackingLabel?: string;
}

export interface ProjectCard {
  title: string;
  description: string;
  companyLine?: string;
  image: {
    src: string;
    alt: string;
    focalPoint?: "center" | "top" | "bottom" | "left" | "right";
  };
}

export interface Project {
  id: ProjectId;
  company: Company;
  tags: Tag[];
  card: ProjectCard;
  primaryLink: ProjectLink;
  metrics?: Metric[];
  timeframe?: string;
  role?: string;
  chat?: {
    includeInChat?: boolean;
  };
  prototype?: {
    includeInPrototype?: boolean;
  };
  status?: "featured" | "draft" | "hidden";
}
