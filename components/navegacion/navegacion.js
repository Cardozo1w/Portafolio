import React from "react";
import Link from "next/link";
import { Nav } from "./navegacion-styles";



const Navegacion = () => {
  return (
    <div>
        <Nav>
          <h1>Cardoso</h1>
          <nav>
            <Link href="">Inicio</Link>
            <Link href="">Sobre mi</Link>
            <Link href="">Portafolio</Link>
            <Link href="">Contacto</Link>
          </nav>
        </Nav>
      </div>
  );
};

export default Navegacion;
