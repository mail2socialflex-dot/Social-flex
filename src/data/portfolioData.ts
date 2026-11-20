export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  tag?: string;
  description?: string;
  image?: string;
  video?: string;
  link?: string;
  year?: string;
  featured?: boolean;
}

/**
 * SOCIAL FLEX PORTFOLIO DATA
 * 
 * Replace or add your actual projects below.
 * - To add an image: import your image at the top or put it in public/ or src/assets/ and set `image: "/src/assets/my-project.jpg"`
 * - To add a video: set `video: "/src/assets/my-showreel.mp4"`
 * - To set a project link: update `link: "/work/my-project"` or an external URL.
 */
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "project-01",
    title: "YOUR PROJECT 01",
    category: "BRANDING & IDENTITY",
    tag: "Brand Strategy / Visual Identity",
    description: "Featured brand identity and creative direction project.",
    image: "",
    video: "",
    link: "#contact",
    year: "2026",
    featured: true,
  },
  {
    id: "project-02",
    title: "YOUR PROJECT 02",
    category: "DIGITAL CAMPAIGN",
    tag: "Social Media / Performance Marketing",
    description: "Multi-channel digital marketing campaign and content strategy.",
    image: "",
    video: "",
    link: "#contact",
    year: "2026",
  },
  {
    id: "project-03",
    title: "YOUR PROJECT 03",
    category: "CONTENT CREATION",
    tag: "Video Production / Art Direction",
    description: "Cinematic commercial content and creative storytelling.",
    image: "",
    video: "",
    link: "#contact",
    year: "2026",
  },
  {
    id: "project-04",
    title: "YOUR PROJECT 04",
    category: "CREATIVE DESIGN",
    tag: "UI/UX / Digital Experience",
    description: "Immersive web design and interactive brand experience.",
    image: "",
    video: "",
    link: "#contact",
    year: "2026",
  },
];
