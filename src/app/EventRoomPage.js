import EventRoom from "components/EventRoom";
import EventRoomBottom from "./EventRoomBottom";
import { useEffect } from "react";
import { participants } from "data";

const EventRoomPage = ({ scrollToTop, events, ...rest }) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const user = rest.user;
  const eventId = rest.match.params.id;

  const event = events.find((x) => +x.id === +eventId);

  const getSpeaker = () => {
    switch (user.role) {
      case "student":
        if (user.selectedSpeaker) {
          return participants.find((x) => x.id === user.selectedSpeaker);
        }
        return user;

      default:
        return user;
    }
  };

  return (
    <EventRoom
      {...rest}
      event={event}
      speaker={getSpeaker()}
      participants={participants}
      prepareTitlePosition={user.role === "student" ? "bottom" : "top"}
      prepareTitle={
        user.role === "student"
          ? "Please select your speaker or school representative"
          : "Students are joining!"
      }
    >
      <EventRoomBottom event={event} {...rest}></EventRoomBottom>
    </EventRoom>
  );
};

export default EventRoomPage;
