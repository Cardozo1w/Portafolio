import React from "react";
import styles from "../styles/index.module.css";
import Layout from "../components/layout";
import { Contenedor } from "../components/contenedor/contenedor";
import {
  CardSkill,
  GridNosotros,
  GridSkills,
  Info,
} from "../components/styled/styled";
//import {FaHtml5} from 'react-icons/fa'

import imgHeader from "../assets/img-hero.svg";
import styled from "styled-components";
import oscar from "../assets/oscar.png";
import { Boton } from "../components/boton/botones";

const Index = () => {
  return (
    <Layout>
      <Contenedor className={styles.header}>
        <Info>
          <h1>Soy Oscar Cardoso</h1>
          <p>Front End Developer</p>
        </Info>
        <img src={imgHeader.src} />
      </Contenedor>

      <Contenedor className={styles.sobre}>
        <h1>Mas Sobre Mi</h1>
        <GridNosotros>
            <img src={oscar.src} />
          <div className={styles.about}>
            <h2>Quien soy</h2>
            <p>
              Soy un apasionado front end developer con bases de diseño con más
              de 3 años de experiencia en el área, mi prinicipal herramienta de
              trabajo es React y estoy especializado en convertir diseños
              Figma/Adobe XD en componentes funcionales.
            </p>
            <Boton type="button">Descarga mi CV</Boton>
          </div>
        </GridNosotros>
      </Contenedor>

      <Contenedor className={styles.skills}>
        <h1>Mis habilidades</h1>
        <GridSkills>
          <CardSkill>
            <p>Html 5</p>
          </CardSkill>
        </GridSkills>
      </Contenedor>
    </Layout>
  );
};

export default Index;
