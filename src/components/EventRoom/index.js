import ConferenceView from "./ConferenceView";
import Chat from "./Chat";
import { useEffect, useState } from "react";

const ConferenceRoom = ({ user, participants, messages, children }) => {
  const [speaker, setSpeaker] = useState(null);

  useEffect(() => {
    setSpeaker(participants[0]);
  }, [participants]);
  return (
    <div>
      <div className="flex">
        <div className="flex-grow">
          <ConferenceView participants={participants} me={user} speaker={speaker}></ConferenceView>
        </div>
        <Chat messages={messages}></Chat>
      </div>
      {children}
    </div>
  );
};

export default ConferenceRoom;
