import { useHuddleStore } from "@huddle01/huddle01-client/store";
import React, { useEffect, useRef } from "react";

const MeVideoElem = () => {
  const stream = useHuddleStore((state) => state.stream);
  const isCamPaused = useHuddleStore((state) => state.isCamPaused);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
    console.log({ stream });
  }, [stream]);
  return (
    <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden w-[50%]">
      <video
        className="w-full h-full object-cover"
        ref={videoRef}
        autoPlay
        muted
        playsInline
      ></video>
    </div>
  );
};

export default MeVideoElem;
