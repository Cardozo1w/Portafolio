import React from "react";

import { Contenedor } from "../contenedor/contenedor";
import { GridSkills, CardSkill } from "../styled/styled";
import styles from "../../styles/index.module.css";
import { AiFillHtml5 } from "@react-icons/all-files/ai/AiFillHtml5";
import { IoLogoCss3 } from "@react-icons/all-files/io/IoLogoCss3";
import { IoLogoJavascript } from "@react-icons/all-files/io/IoLogoJavascript";
import { IoLogoReact } from "@react-icons/all-files/io5/IoLogoReact";
import {FaNodeJs} from '@react-icons/all-files/fa/FaNodeJs'
import { DiMysql } from "@react-icons/all-files/di/DiMysql";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";
import { SiGatsby } from "@react-icons/all-files/si/SiGatsby";
import { FaBootstrap } from "@react-icons/all-files/fa/FaBootstrap";
import {SiStrapi} from '@react-icons/all-files/si/SiStrapi';

const Habilidades = () => {
  return (
    <>
      <Contenedor className={styles.skills} id="habilidades">
        <h1>Habilidades</h1>
        <GridSkills>
          <CardSkill target="_blank" href="https://es.wikipedia.org/wiki/HTML5">
            <AiFillHtml5 />
            <p>Html 5</p>
          </CardSkill>
          <CardSkill target="_blank" href="https://developer.mozilla.org/es/docs/Web/CSS">
            <IoLogoCss3 />
            <p>Css3</p>
          </CardSkill>
          <CardSkill target="_blank" href="https://developer.mozilla.org/es/docs/Web/JavaScript">
            <IoLogoJavascript />
            <p>JavaScript</p>
          </CardSkill>
          <CardSkill target="_blank" href="https://es.reactjs.org/">
            <IoLogoReact />
            <p>React</p>
          </CardSkill>
          <CardSkill target="_blank" href="https://nodejs.org/es/">
              <FaNodeJs />
            <p>Node</p>
          </CardSkill>
          <CardSkill target="_blank" href="https://es.wikipedia.org/wiki/MySQL">
            <DiMysql />
            <p>MySql</p>
          </CardSkill>
          <CardSkill target="_blank" href="https://www.mongodb.com/es">
            <SiMongodb />
            <p>MongoDB</p>
          </CardSkill>
          <CardSkill target="_blank" href="https://www.gatsbyjs.com/">
            <SiGatsby />
            <p>Gatsby</p>
          </CardSkill>
          <CardSkill target="_blank" href="https://getbootstrap.com/">
            <FaBootstrap/>
            <p>Bootstrap</p>
          </CardSkill>
          <CardSkill target="_blank" href="https://strapi.io/">
              <SiStrapi />
              <p>Strapi</p>
          </CardSkill>
        </GridSkills>
      </Contenedor>
    </>
  );
};

export default Habilidades;
