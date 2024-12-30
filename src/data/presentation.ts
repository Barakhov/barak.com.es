type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "a.barakhov@gmail.com",
  title: "Hi there, I'm Alex 👋",
  description:
    "I'm a frontend developer with a robust background in visual design, specializing in user interface development. I build intuitive, engaging interactions using technologies like Svelte, React, Tailwind, 11ty, Webflow, GSAP, and Rive. Passionate about web animations, I prioritize user experience, accessibility, and best practices. Skilled in cross-functional collaboration, I simplify complex problems and stay ahead of industry trends.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/alex-barakhov-103b26a9/",
    },
    {
      label: "X (Twiiter)",
      link: "https://x.com/a_barakhov",
    },
    {
      label: "Github",
      link: "https://github.com/Barakhov",
    },
  ],
};

export default presentation;
