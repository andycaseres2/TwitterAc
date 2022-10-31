import React from "react";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { AppContextProvider } from "./Context/Context";

function MyApp({ Component, pageProps, session }) {
  return (
    <AppContextProvider session={session}>
      <SessionProvider session={session}>
        <Component {...pageProps} />;
      </SessionProvider>
    </AppContextProvider>
  );
}

export default MyApp;
