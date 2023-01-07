import { useHuddleStore } from "@huddle01/huddle01-client/store";
import React, { useEffect, useRef } from "react";
import { BiCamera, BiCameraOff } from "react-icons/bi";
import {
  BsFillMicMuteFill,
  BsMicFill,
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from "react-icons/bs";

import { huddleClient } from "../index";
const MeVideoElem = () => {
  const stream = useHuddleStore((state) => state.stream);
  const isCamPaused = useHuddleStore((state) => state.isCamPaused);
  const isMicPaused = useHuddleStore((state) => state.isMicPaused);
  const recordingState = useHuddleStore((state) => state.recordingState);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
    console.log({ stream });
  }, [stream]);
  return (
    <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden w-full h-[280px] relative">
      <video
        className="w-full h-full object-cover"
        ref={videoRef}
        autoPlay
        muted
        playsInline
      ></video>
      <p className="absolute top-[20px] left-[20px]">You</p>
      <div className="flex absolute bottom-[20px] left-[50%] translate-x-[-50%] gap-4">
        {" "}
        <button>
          {isMicPaused ? (
            <BsFillMicMuteFill
              className="rounded-full bg-white p-[10px] w-10 h-10"
              onClick={() => huddleClient.enableMic()}
            />
          ) : (
            <BsMicFill
              className="rounded-full bg-white p-[10px] w-10 h-10"
              onClick={() => huddleClient.disableMic()}
            />
          )}
        </button>
        <button>
          {isCamPaused ? (
            <BiCameraOff
              className="rounded-full bg-white p-[10px] w-10 h-10"
              onClick={() => huddleClient.enableWebcam()}
            />
          ) : (
            <BiCamera
              className="rounded-full bg-white p-[10px] w-10 h-10"
              onClick={() => huddleClient.disableWebcam()}
            />
          )}
        </button>
        <button>
          {recordingState.inProgress.toString() == "false" ? (
            <BsFillCameraVideoOffFill
              className="rounded-full bg-white p-[10px] w-10 h-10"
              onClick={() =>
                // will not work in localhost
                huddleClient.startRecording({
                  sourceUrl: window.location.href,
                })
              }
            />
          ) : (
            <BsFillCameraVideoFill
              className="rounded-full bg-white p-[10px] w-10 h-10"
              onClick={() => huddleClient.stopRecording({ ipfs: true })}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default MeVideoElem;
