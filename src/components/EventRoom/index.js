import ConferenceView from "./ConferenceView";
import Chat from "./Chat";
import { participants, me, speaker, messages } from "data";

const ConferenceRoom = ({ roomId, user, children }) => {
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
