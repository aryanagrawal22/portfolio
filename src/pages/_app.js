import "../styles/tailwind.css";
import "../styles/app.css";
import "../styles/loader.less";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <title>Aryan Agrawal | Portfolio</title>
        <meta property="og:url" content="https://aryanagrawal.in"/>
        <meta name="title" property="og:title" content="Aryan Agrawal | Portfolio" />
        <meta property="og:type" content="Website" />
        <meta name="image" property="og:image" content="images/thumbnail.PNG" />
        <meta name="description" property="og:description" content="I am Innovative, task-driven, and enthusiastic with knowledge of Web-Development and creating highly scalable and distributed systems" />
        <meta name="author" content="Aryan Agrawal" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
