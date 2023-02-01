import "../styles/globals.css";
import type { AppProps } from "next/app";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
