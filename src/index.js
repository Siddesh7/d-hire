import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  HuddleClientProvider,
  getHuddleClient,
} from "@huddle01/huddle01-client";
import { WagmiConfig, createClient } from "wagmi";
import { polygonMumbai, goerli } from "wagmi/chains";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import Hero from "./components/Hero";

import Room from "./pages/Room";
import UserPage from "./pages/UserPage";

const chains = [goerli, polygonMumbai];
const client = createClient(
  getDefaultClient({
    appName: "d-hire",
    chains,
  })
);
const huddleClient = getHuddleClient(
  "07c420f6af49358778b3b1a040f711bf88144d15de50766409941663c64689c9"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <HuddleClientProvider client={huddleClient}>
        <ConnectKitProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />}></Route>
              <Route path="/:wallet" element={<UserPage />}></Route>
              <Route path="/call/:id" element={<Room />} />
            </Routes>
          </BrowserRouter>
        </ConnectKitProvider>
      </HuddleClientProvider>
    </WagmiConfig>
  </React.StrictMode>
);
