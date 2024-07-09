import React from "react";

import { Contenedor } from "../contenedor/contenedor";
import { GridSkills, CardSkill } from "../styled/styled";
import styles from "../../styles/index.module.css";
import { AiFillHtml5 } from "@react-icons/all-files/ai/AiFillHtml5";
import { IoLogoCss3 } from "@react-icons/all-files/io/IoLogoCss3";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { IoLogoReact } from "@react-icons/all-files/io5/IoLogoReact";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { DiMysql } from "@react-icons/all-files/di/DiMysql";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";
import { SiGatsby } from "@react-icons/all-files/si/SiGatsby";
import { FaBootstrap } from "@react-icons/all-files/fa/FaBootstrap";
import { SiStrapi } from "@react-icons/all-files/si/SiStrapi";
import { SiNextdotjs } from "react-icons/si";
import { SiDrupal } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiGraphql } from "react-icons/si";

const Habilidades = () => {
  const skills = [
    {
      href: "https://es.wikipedia.org/wiki/HTML5",
      icon: <AiFillHtml5 />,
      label: "Html5",
    },
    {
      href: "https://developer.mozilla.org/es/docs/Web/CSS",
      icon: <IoLogoCss3 />,
      label: "Css3",
    },
    {
      href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      icon: <SiJavascript />,
      label: "JavaScript",
    },
    {
      href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      icon: <SiTypescript />,
      label: "TypeScript",
    },
    { href: "https://es.reactjs.org/", icon: <IoLogoReact />, label: "React" },
    { href: "https://www.gatsbyjs.com/", icon: <SiGatsby />, label: "Gatsby" },

    {
      href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      icon: <SiNextdotjs />,
      label: "NextJS",
    },
    { href: "https://www.gatsbyjs.com/", icon: <SiGraphql />, label: "Graphql" },

    {
      href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      icon: <SiDrupal />,
      label: "Drupal",
    },
    { href: "https://strapi.io/", icon: <SiStrapi />, label: "Strapi" },
    {
      href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      icon: <SiTailwindcss />,
      label: "TailwindCSS",
    },
    { href: "https://nodejs.org/es/", icon: <FaNodeJs />, label: "Node" },
    {
      href: "https://es.wikipedia.org/wiki/MySQL",
      icon: <DiMysql />,
      label: "MySql",
    },
    {
      href: "https://www.mongodb.com/es",
      icon: <SiMongodb />,
      label: "MongoDB",
    },
    {
      href: "https://getbootstrap.com/",
      icon: <FaBootstrap />,
      label: "Bootstrap",
    },
  ];
  return (
    <Contenedor className={styles.skills} id="habilidades">
      <h1>Habilidades</h1>
      <GridSkills>
        {skills.map((skill, index) => (
          <CardSkill key={index} target="_blank" href={skill.href}>
            {skill.icon}
            <p>{skill.label}</p>
          </CardSkill>
        ))}
      </GridSkills>
    </Contenedor>
  );
};

export default Habilidades;
