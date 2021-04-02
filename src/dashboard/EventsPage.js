import EventsList from "components/EventsList";

import EventMainButton from "./EventMainButton";
import EventSecondaryButtons from "./EventSecondaryButtons";

const Events = ({ user, events, scrollToTop, goToEventPage, goToEventRoom, sendEventRequest }) => {
  return (
    <EventsList
      sendEventRequest={sendEventRequest}
      goToEventRoom={goToEventRoom}
      goToEventPage={goToEventPage}
      scrollToTop={scrollToTop}
      events={events}
      user={user}
      MainButton={EventMainButton}
      SecondaryButtons={EventSecondaryButtons}
      filterFunction={(x) => user.role === "admin" || user.letInEvents.includes(x.id)}
    ></EventsList>
  );
};

export default Events;
