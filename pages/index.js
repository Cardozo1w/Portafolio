import React from "react";
import styles from "../styles/index.module.css";
import Typical from "react-typical";
import Layout from "../components/layout";
import { Contenedor } from "../components/contenedor/contenedor";
import {
  GridNosotros,
  Info,
} from "../components/styled/styled";

import imgHeader from "../assets/img-hero.svg";
import styled from "styled-components";
import oscar from "../assets/oscar.png";
import { Boton } from "../components/boton/botones";
import Habilidades from "../components/habilidades/habilidades";

const Index = () => {
  return (
    <Layout>
      <Contenedor className={styles.header}>
        <Info>
          <h1>Soy Oscar Cardoso</h1>
          <Typical
            steps={["Frontend Developer", 2000, "React Developer", 2000]}
            loop={Infinity}
            wrapper="p"
          />
        </Info>
        <img src={imgHeader.src} />
      </Contenedor>

      <Contenedor className={styles.sobre} id="about">
        <h1>Mas Sobre Mi</h1>
        <GridNosotros>
          <div className="d-flex align-items-center justify-content-center">
            <img src={oscar.src} />
          </div>
          <div className={styles.about}>
            <h2>Quién soy</h2>
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

      <Habilidades/>

      <Contenedor className={styles.portafolio}>
        <h1>Portafolio</h1>
      </Contenedor>
    </Layout>
  );
};

export default Index;
