import { useHuddleStore } from "@huddle01/huddle01-client/store";
import React, { useEffect, useRef } from "react";
import {
  BsFillMicMuteFill,
  BsMicFill,
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from "react-icons/bs";
const MeVideoElem = () => {
  const stream = useHuddleStore((state) => state.stream);
  const isCamPaused = useHuddleStore((state) => state.isCamPaused);
  const isMicPaused = useHuddleStore((state) => state.isMicPaused);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
    console.log({ stream });
  }, [stream]);
  return (
    <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden w-[50%] relative">
      <video
        className="w-full h-full object-cover"
        ref={videoRef}
        autoPlay
        muted
        playsInline
      ></video>
      <div className="flex absolute bottom-[20px] left-[50px]">
        {" "}
        <button>{isMicPaused ? <BsFillMicMuteFill /> : <BsMicFill />}</button>
        <button>
          {isCamPaused ? (
            <BsFillCameraVideoOffFill />
          ) : (
            <BsFillCameraVideoFill />
          )}
        </button>
      </div>
    </div>
  );
};

export default MeVideoElem;
