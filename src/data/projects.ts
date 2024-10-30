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
  {
    title: "Redradix",
    techs: ["Webflow", "GSAP"],
    link: "https://www.redradix.com/",
  }, 
  {
    title: "Ambar Partners",
    techs: ["Webflow", "GSAP"],
    link: "https://www.ambarpartners.com/",
  }, 
  {
    title: "Fundación Luckia",
    techs: ["Webflow", "GSAP", "Matter.js"],
    link: "https://www.fundacionluckia.com/",
  }, 
  {
    title: "Vent Finance",
    techs: ["Webflow"],
    link: "https://www.vent.finance/",
  }, 
  {
    title: "Electromaps",
    techs: ["Webflow"],
    link: "https://www.electromaps.com/",
  },          
];

export default projects;
