import { useHuddleStore } from "@huddle01/huddle01-client/store";
import React, { useCallback, useEffect, useRef } from "react";

const PeerVideoAudioElem = ({ peerIdAtIndex }) => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const displayName = useHuddleStore(
    (state) => state.peers[peerIdAtIndex].displayName
  );

  const peerCamTrack = useHuddleStore(
    useCallback(
      (state) => state.peers[peerIdAtIndex]?.consumers?.cam,
      [peerIdAtIndex]
    )
  )?.track;

  const peerMicTrack = useHuddleStore(
    useCallback(
      (state) => state.peers[peerIdAtIndex]?.consumers?.mic,
      [peerIdAtIndex]
    )
  )?.track;

  const getStream = (_track) => {
    const stream = new MediaStream();
    stream.addTrack(_track);
    return stream;
  };

  useEffect(() => {
    const videoObj = videoRef.current;

    if (videoObj && peerCamTrack) {
      videoObj.load();
      videoObj.srcObject = getStream(peerCamTrack);
      videoObj.play().catch((err) => {
        console.log({
          message: "Error playing video",
          meta: {
            err,
          },
        });
      });
    }

    return () => {
      if (videoObj) {
        videoObj?.pause();
        videoObj.srcObject = null;
      }
    };
  }, [peerCamTrack]);

  useEffect(() => {
    if (peerMicTrack && audioRef.current) {
      audioRef.current.srcObject = getStream(peerMicTrack);
    }
  }, [peerMicTrack]);

  return (
    <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden w-full h-[280px] relative">
      <p className=""> {displayName}</p>
      <video
        ref={videoRef}
        className="w-full object-cover"
        muted
        autoPlay
        playsInline
      />
      <audio ref={audioRef} autoPlay playsInline controls={false}></audio>
    </div>
  );
};

export default React.memo(PeerVideoAudioElem);
