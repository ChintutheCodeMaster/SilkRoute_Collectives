import "./globals.css";
import { Cormorant_Garamond, Jost } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Silkroutes Collectives — Provenance, in writing",
  description:
    "Heritage objects sourced along the Silk Road, bought at the beginning of the road, not the end.",
};

const fitScript = `(function(){function f(){var w=window.innerWidth;document.body.style.zoom=w<1440?(w/1440).toString():"";}f();window.addEventListener("resize",f);})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: fitScript }} />
        {children}
      </body>
    </html>
  );
}
