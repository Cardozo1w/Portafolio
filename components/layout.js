import React from "react";
import Head from "next/head";
import Navegacion from "./navegacion/navegacion";


const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <Navegacion />
      {children}
    </>
  );
};

export default Layout;
