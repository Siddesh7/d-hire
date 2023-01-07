import { useHuddleStore } from "@huddle01/huddle01-client/store";
import PeerVideoAudioElem from "../components/PeerVideoAudioElem";
import MeVideoElem from "../components/MeVideoElem";
import { useParams } from "react-router-dom";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { getHuddleClient } from "@huddle01/huddle01-client";

function Room(props) {
  const { id } = useParams();

  const peersKeys = useHuddleStore((state) => Object.keys(state.peers));
  const lobbyPeers = useHuddleStore((state) => state.lobbyPeers);
  const roomState = useHuddleStore((state) => state.roomState);
  const recordingState = useHuddleStore((state) => state.recordingState);
  const recordings = useHuddleStore((state) => state.recordings);
  const { address } = useAccount();
  const huddleClient = getHuddleClient(
    "07c420f6af49358778b3b1a040f711bf88144d15de50766409941663c64689c9"
  );
  const handleJoin = async () => {
    console.log(id);

    try {
      await huddleClient.join(id, {
        address: address,
        wallet: "MetaMask",
      });
      console.log(id);
      console.log("joined");
      huddleClient.allowAllLobbyPeersToJoinRoom();
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="h-[90vh]">
      <button onClick={handleJoin}>Join Room</button>
      <div className="grid grid-cols-2 gap-4 w-[85%] m-auto justify-between">
        {" "}
        <MeVideoElem />
        {peersKeys.map((key) => (
          <PeerVideoAudioElem key={`peerId-${key}`} peerIdAtIndex={key} />
        ))}
      </div>
    </div>
  );
}

export default Room;
