import "../styles/globals.css";
import type { AppProps } from "next/app";

function SoloLive({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default SoloLive;
