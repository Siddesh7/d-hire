import { ConnectKitButton } from "connectkit";
import styled, { keyframes } from "styled-components";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between py-[14px]">
      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <a className="navbar-brand" href="/">
          <AnimatedGradientText className="font-bold text-4xl">
            d-Hire
          </AnimatedGradientText>
        </a>

        <div className="flex items-center lg:ml-auto">
          <ConnectKitButton />
        </div>
      </div>
    </nav>
  );
}
const hue = keyframes`
from {
  -webkit-filter: hue-rotate(0deg);
}
to {
  -webkit-filter: hue-rotate(-360deg);
}
`;
export const AnimatedGradientText = styled.h1`
  color: #f35626;
  background-image: -webkit-linear-gradient(192deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 4s infinite linear;
  font-feature-settings: "kern";
  overflow-wrap: break-word;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;
