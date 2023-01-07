import Lottie from "react-lottie";
import * as HeroAnimation from "../assets/hero.json";
export default function Hero() {
  return (
    <div className="px-6 py-12 lg:py-24 md:px-12 text-center lg:text-left h-[80vh]">
      <div className="container mx-auto text-gray-800">
        <div className="grid lg:grid-cols-[3fr,1fr] gap-12 flex items-center">
          <div className="mt-12 lg:mt-0" style={{ zIndex: 10 }}>
            <h1
              className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              The only platform that
              <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                you'll need for your hiring journey.
              </span>
            </h1>
            <p className="opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
              Easily manage and setup meeting with the applicants at one place.
            </p>
            <a
              href="/create"
              className="flex lg:block justify-center items-center"
            >
              <div className="w-[250px] mt-[30px] flex items-center bg-white shadow rounded-lg py-4 px-8">
                <p className="m-auto inset-0 text-xl font-semibold leading-7 text-center text-gray-800">
                  Get Started
                </p>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
          <div className="mb-12 lg:mb-0 relative hidden lg:flex">
            <div className="block rounded-lg px-6 py-12 md:px-[22px]">
              <Lottie options={defaultOptions} width="300px" height="300px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: HeroAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
