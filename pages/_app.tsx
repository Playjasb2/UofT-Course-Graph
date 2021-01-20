import React from "react";
import "../styles/globalStyles.css";

import type { AppProps /*, AppContext */ } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
