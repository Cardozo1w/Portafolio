import React from "react";
import styles from "../styles/index.module.css";
import Layout from "../components/layout";
import { Contenedor } from "../components/contenedor/contenedor";
import { CardProject, GridNosotros, Info } from "../components/styled/styled";
import { Boton } from "../components/boton/botones";
import Habilidades from "../components/habilidades/habilidades";

// assets
import imgHeader from "../assets/img-hero.svg";
import oscar from "../assets/oscar.webp";
import imgProject1 from "../assets/project1.png";
import imgProject2 from "../assets/project2.png";

const Index = () => {
  return (
    <Layout>
      <Contenedor className={styles.header}>
        <Info>
          <h1>Soy Oscar Cardoso :)</h1>
          {/* <Typical
            steps={["Frontend Developer", 2000, "React Developer", 2000]}
            loop={Infinity}
            wrapper="p"
          /> */}
        </Info>
        <img src={imgHeader.src} />
      </Contenedor>
      <Contenedor className={styles.sobre} id="about">
        <h1>Mas Sobre Mi</h1>
        <GridNosotros>
          <div className="img-nosotros">
            <img src={oscar.src} />
          </div>
          <div className={styles.about}>
            {/* <h2>Sobre mi</h2> */}
            <p>
              Desarrollador web con 3 años de experiencia en la creación de
              soluciones tecnológicas eficientes y escalables. Me especializo en
              tecnológias como Gatsby, Next, Remix y sistemas de gestión de
              contenido (CMS) como Drupal o Strapi, tengo la capacidad de
              trabajar con diversos CMSs y APIs. Mi experiencia incluye la
              interpretación de estilos HTML y el desarrollo de herramientas
              personalizadas para procesar contenido.
            </p>
            <p> Me gusta tocar guitarra y jugar algunos videojuegos.</p>
            <Boton type="button">Descarga mi CV</Boton>
          </div>
        </GridNosotros>
      </Contenedor>
      <Habilidades />
      <Contenedor className={styles.portafolio}>
        <h2>Portafolio</h2>
        <CardProject>
          <div className="project-image-container">
            <img src={imgProject1.src} />
          </div>
          <div className="project-description-container">
            <p>Project title: My Dream Place</p>
            <p>
              Tecnológias utilizadas: Drupal (backend), Gatsby (frontend),
              Graphql, Typescript, Storybook, Vercel.
            </p>
            <p>
              My Dream Place fué desarrollado como proyecto de residencia de
              universidad, se trata de un sitio web para una empresa ficticia de
              viajes, el objetivo de este proyecto fué demostrar el potencial de
              utiliar un sitio desacoplado del backend, permitiendo a los
              usuarios la modificación de contenido de una manera fácil y
              eficaz.
            </p>
            <p>
              Link del proyecto:{" "}
              <a href="https://com-gatsby-drupal.vercel.app/">
                https://com-gatsby-drupal.vercel.app/
              </a>
            </p>
          </div>
        </CardProject>
        <CardProject>
          <div className="project-image-container">
            <img src={imgProject2.src} />
          </div>
          <div className="project-description-container">
            <p>Project title: Labfem</p>
            <p>
              Tecnológias utilizadas: Drupal (backend), Gatsby (frontend),
              Graphql, Vercel.
            </p>
            <p>
              Labfem nace de la necesidad de informar a las mujeres sobre sus
              derechos y vibilidad las desigualdades dentro de la sociedad
            </p>
            <p>
              Link del proyecto:{" "}
              <a href="https://labfem.vercel.app/">
                https://labfem.vercel.app/
              </a>
            </p>
          </div>
        </CardProject>
      </Contenedor>
      <Contenedor>
        <h2>Experiencia</h2>
        <div>
          <h3>Octahedroid</h3>
          <p>
            Actualmente me encuentro trabajando en Octahedroid, es una empresa
            donde el ambiente es muy calido y los compañeros de trabajo son muy
            agradables, es un lugar con muchos valores y de donde se aprende
            mucho.
          </p>
          <p>
            En cuanto a mi rol dentro de la empresa, desempeño tareas del area
            de frontend, creando nuevas interfaces, modificando existentes, y
            siempre brindando ideas inovadoras para la optimizacion del codigo y
            de los sitios a nuestro cargo, a su vez, realizo tareas de Drupal
            (backend), donde mi tarea principal es configurar las interfaces que
            los editores de contenido utilizaran para modificar las paginas,
            estas tareas tambien implican la creacion o modificacion de modulos
            personalizados.
          </p>
          <p>Puesto: Fullstack developer</p>
          <p>Tecnologias: Drupal, Gatsby, Remix, Storybook, Jira</p>
          <p>Mayo 2022 - Ahora</p>
        </div>
        <div>
          <h3>Mexican Nomads</h3>
          <p>
            Mi rol en Mexican Nomads se destaco en el uso de React para realizar
            tareas para la mejora de un ecommerce
          </p>
          <p>Puesto: Frontend developer</p>
          <p>Tecnologias: React, Click Up, Stripe</p>
          <p>Abril 2021 - Diciembre 2021</p>
        </div>
      </Contenedor>
      <Contenedor>
        <h2>Idiomas</h2>
        <div>
          <p>Spanish: Native language</p>
          <p>English: Conversational</p>
          <p>Japanese: Elementary</p>
        </div>
      </Contenedor>
    </Layout>
  );
};

export default Index;
