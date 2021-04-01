import EventRoom from "components/EventRoom";
import EventRoomBottom from "./EventRoomBottom";
import EventsList from "components/EventsList";
import { useState } from "react";
import EventMainButton from "./EventMainButton";
import EventSecondaryButtons from "./EventSecondaryButtons";

const Events = ({ user, events, scrollToTop, goToEventPage }) => {
  const [eventId, setEventId] = useState(null);
  return eventId ? (
    <EventRoom eventId={eventId} user={user}>
      <EventRoomBottom role={user.role}></EventRoomBottom>
    </EventRoom>
  ) : (
    <EventsList
      goToEventRoom={(evId) => setEventId(evId)}
      goToEventPage={goToEventPage}
      scrollToTop={scrollToTop}
      events={events}
      user={user}
      MainButton={EventMainButton}
      SecondaryButtons={EventSecondaryButtons}
    ></EventsList>
  );
};

export default Events;
