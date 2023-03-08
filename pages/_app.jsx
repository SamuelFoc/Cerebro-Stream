import { ThemeProvider } from "next-themes";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from "@vercel/analytics/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/global.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
