import { useEffect, useState } from "react";
import "./App.css";

import { huddleIframeApp, HuddleIframe } from "@huddle01/huddle01-iframe";

function HuddleIframeWindow() {
  const [walletAddress, setWalletAddress] = useState("");

  const iframeConfig = {
    roomUrl: window.location.href,
    height: "600px",
    width: "80%",
  };

  useEffect(() => {
    huddleIframeApp.on("peer-join", (data) =>
      console.log({ iframeData: data })
    );
    huddleIframeApp.on("peer-left", (data) =>
      console.log({ iframeData: data })
    );
  }, []);

  return (
    <div className="App">
      <HuddleIframe config={iframeConfig} />
    </div>
  );
}

export default HuddleIframeWindow;
