import React from "react";
import Head from "next/head";
import Navegacion from "./navegacion/navegacion";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" />
      </Head>
      <Navegacion />
      {children}
    </>
  );
};

export default Layout;
