import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children, title }) => {
  return (
    <div>
      {/* メタ情報 ------------ */}
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="プログラミングによるTaskyアプリの作成方法をお教えします。まずは、アプリをお試し下さい。"
        />
        <link
          rel="preload"
          href="/_next/static/media/Tasky_header.ef04c1a7.svg"
          as="image"
        />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
