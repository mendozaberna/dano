import { Inter } from "next/font/google";
import "./globals.css";
import "../public/bootstrap.min.css"
import "../public/boxicons.min.css"
import "../public/styles.cdeb25788ed1d468786d.css"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon"
          data-savepage-href="https://www.formaciondocente.unam.mx/constancias/assets/images/favicon/android-icon-192x192.png"
          href="/">

        </link>
        <meta charset="utf-8"></meta>
        <title>Constancias - SIGEM</title>
        <base href="/constancias/"></base>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="apple-touch-icon" sizes="57x57" data-savepage-href="./assets/images/favicon/apple-icon-57x57.png" href=""></link>
        <link rel="apple-touch-icon" sizes="60x60" data-savepage-href="./assets/images/favicon/apple-icon-60x60.png" href=""></link>
        <link rel="apple-touch-icon" sizes="72x72" data-savepage-href="./assets/images/favicon/apple-icon-72x72.png" href=""></link>
        <link rel="apple-touch-icon" sizes="76x76" data-savepage-href="./assets/images/favicon/apple-icon-76x76.png" href=""></link>
        <link rel="apple-touch-icon" sizes="114x114" data-savepage-href="./assets/images/favicon/apple-icon-114x114.png"
          href=""></link>
        <link rel="apple-touch-icon" sizes="120x120" data-savepage-href="./assets/images/favicon/apple-icon-120x120.png"
          href=""></link>
        <link rel="apple-touch-icon" sizes="144x144" data-savepage-href="./assets/images/favicon/apple-icon-144x144.png"
          href=""></link>
        <link rel="apple-touch-icon" sizes="152x152" data-savepage-href="./assets/images/favicon/apple-icon-152x152.png"
          href=""></link>
        <link rel="apple-touch-icon" sizes="180x180" data-savepage-href="./assets/images/favicon/apple-icon-180x180.png"
          href=""></link>
        <link rel="icon" type="image/png" sizes="192x192"
          data-savepage-href="./assets/images/favicon/android-icon-192x192.png"
          href=""></link>
        <link rel="icon" type="image/png" sizes="32x32" data-savepage-href="./assets/images/favicon/favicon-32x32.png"
          href=""></link>
        <link rel="icon" type="image/png" sizes="96x96" data-savepage-href="./assets/images/favicon/favicon-96x96.png"
          href=""></link>
        <link rel="icon" type="image/png" sizes="16x16" data-savepage-href="./assets/images/favicon/favicon-16x16.png"
          href="/"></link>
        <link rel="manifest" data-savepage-href="./assets/images/favicon/manifest.json" href=""></link>
        <meta name="msapplication-TileColor" content="#ffffff"></meta>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="icon" type="image/x-icon" data-savepage-href="favicon.ico"
          href="#"></link>  
        <meta name="savepage-url"
          content="https://www.formaciondocente.unam.mx/constancias/validar/6c83cdabdeabed6d2fd694ce889b70cb"></meta>
        <meta name="savepage-title" content="Constancias - SIGEM"></meta>
        <meta name="savepage-pubdate" content="Unknown"></meta>
        <meta name="savepage-from"
          content="https://www.formaciondocente.unam.mx/constancias/validar/6c83cdabdeabed6d2fd694ce889b70cb"></meta>
        <meta name="savepage-date" content="Thu May 02 2024 18:21:47 GMT-0600 (hora estándar central)"></meta>
        <meta name="savepage-state"
          content="Standard Items; Retain cross-origin frames; Merge CSS images; Remove unsaved URLs; Load lazy images in existing content; Max frame depth = 5; Max resource size = 50MB; Max resource time = 10s;"></meta>
        <meta name="savepage-version" content="33.9"></meta>
        <meta name="savepage-comments" content=""></meta>
      </head>

      <body className="d-flex flex-column h-100 unam">{children}</body>
    </html>
  );
}
