import { participants, me, speaker } from "data";
import ConferenceRoom from "components/ConferenceRoom";
import ConferenceBottom from "./ConferenceBottom";

const Events = ({ user }) => {
  const roomId = "123";
  return (
    <ConferenceRoom roomId={roomId} user={user}>
      <ConferenceBottom role={user.role}></ConferenceBottom>
    </ConferenceRoom>
  );
};

export default Events;
