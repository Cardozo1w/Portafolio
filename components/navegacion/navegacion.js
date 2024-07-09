import React from "react";
import Link from "next/link";
import { Nav } from "./navegacion-styles";


const Navegacion = () => {
  return (
    <div id="inicio">
        <Nav>
          {/* <h1>Cardoso</h1> */}
          <nav className="navigation">
            <Link href="#inicio">Inicio</Link>
            <Link href="#about">Sobre mi</Link>
            <Link href="#habilidades">Habilidades</Link>
            <Link href="#portafolio">Portafolio</Link>
            <Link href="#contacto">Contacto</Link>
          </nav>
        </Nav>
      </div>
  );
};

export default Navegacion;
