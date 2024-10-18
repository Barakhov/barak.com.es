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
    "I am a frontend developer with a robust background in visual design, specializing in user interface development. My expertise lies in crafting intuitive and engaging interactions using technologies such as React, 11ty, Webflow, and GSAP. Passionate about web animations, I prioritize creating exceptional user experiences while balancing stakeholder needs, accessibility, usability, and industry best practices. I excel in collaborating with designers, marketing teams, developers, and clients to simplify complex problems and stay ahead of technology trends.",
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
