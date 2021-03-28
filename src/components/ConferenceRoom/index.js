import ConferenceView from "./ConferenceView";
import Chat from "./Chat";
import { participants, me, speaker, messages } from "data";
import Button from "components/Button";
import { ReactComponent as TurnOffComponent } from "assets/turn_off.svg";

const ConferenceRoom = ({ roomId }) => {
  return (
    <div>
      <div className="flex">
        <div className="flex-grow">
          <ConferenceView participants={participants} me={me} speaker={speaker}></ConferenceView>
        </div>
        <Chat messages={messages}></Chat>
      </div>
      <div className="flex flex-wrap items-center py-10 border-b border-gray-500">
        <Button className="w-372px mr-5 mb-3">Breakout rooms</Button>
        <Button primary className="w-372px mb-3">
          <div className="flex items-center">
            <TurnOffComponent className="mr-3 w-24px"></TurnOffComponent>
            <div>Stop session</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ConferenceRoom;
