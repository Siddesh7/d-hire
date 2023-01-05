import { useHuddleStore } from "@huddle01/huddle01-client/store";
import PeerVideoAudioElem from "./PeerVideoAudioElem";
import MeVideoElem from "./MeVideoElem";
import { useParams } from "react-router-dom";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { getHuddleClient } from "@huddle01/huddle01-client/*";

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
    <div>
      <div className="card">
        <button onClick={handleJoin}>Join Room</button>
        <button onClick={() => huddleClient.enableWebcam()}>
          Enable Webcam
        </button>
        <button onClick={() => huddleClient.disableWebcam()}>
          Disable Webcam
        </button>
        <button onClick={() => huddleClient.disableMic()}>Disable mic</button>
        <button onClick={() => huddleClient.allowAllLobbyPeersToJoinRoom()}>
          allowAllLobbyPeersToJoinRoom()
        </button>
        <button
          onClick={() =>
            // will not work in localhost
            huddleClient.startRecording({
              sourceUrl: window.location.href,
            })
          }
        >
          startRecording()
        </button>
        <button onClick={() => huddleClient.stopRecording({ ipfs: true })}>
          stopRecording()
        </button>
      </div>

      <MeVideoElem />

      {lobbyPeers[0] && <h2>Lobby Peers</h2>}
      <div>
        {lobbyPeers.map((peer) => (
          <div>{peer.peerId}</div>
        ))}
      </div>

      {peersKeys[0] && <h2>Peers</h2>}

      <div className="peers-grid">
        {peersKeys.map((key) => (
          <PeerVideoAudioElem key={`peerId-${key}`} peerIdAtIndex={key} />
        ))}
      </div>
      <div className="text-blue">
        <h2>Recording State</h2>
        <h3>inProgress: {recordingState.inProgress.toString()}</h3>
        <h3>processing: {recordingState.processing.toString()}</h3>
        <h3>started: {recordingState.started.toString()}</h3>
        <h3>recordings: {JSON.stringify(recordings)}</h3>
      </div>
    </div>
  );
}

export default Room;
