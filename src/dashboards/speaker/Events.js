import { participants, me, speaker } from "data";
import ConferenceRoom from "components/ConferenceRoom";

const Events = () => {
  const roomId = "123";
  return <ConferenceRoom roomId={roomId}></ConferenceRoom>;
};

export default Events;
