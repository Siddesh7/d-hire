import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";
import Room from "./components/Room";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import { WagmiConfig, createClient } from "wagmi";
import { polygonMumbai, goerli } from "wagmi/chains";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import Hero from "./components/Hero";

const chains = [goerli, polygonMumbai];
const client = createClient(
  getDefaultClient({
    appName: "d-hire",
    chains,
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />}></Route>
            <Route path="/:wallet" element={<Room />}></Route>
          </Routes>
        </BrowserRouter>
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
