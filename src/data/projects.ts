export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "MS",
    techs: ["Webflow", "GSAP"],
    link: "https://www.mendesaltaren.com/",
  },
  {
    title: "TURN2X",
    techs: ["React", "Gatsby", "SASS", "GSAP"],
    link: "https://turn2x.com/",
  },
  {
    title: "ClimateExchange",
    techs: ["Webflow", "GSAP"],
    link: "https://www.climatexc.org/",
  },
  {
    title: "Textualize",
    techs: ["Eleventy", "JavaScript", "CSS3"],
    link: "https://www.textualize.io/",
  },  
];

export default projects;
