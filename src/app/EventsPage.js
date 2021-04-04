import EventsList from "components/EventsList";

import EventMainButton from "./EventMainButton";
import EventSecondaryButtons from "./EventSecondaryButtons";

const Events = (props) => {
  const user = props.user;
  return (
    <EventsList
      {...props}
      MainButton={EventMainButton}
      SecondaryButtons={EventSecondaryButtons}
      filterFunction={(x) => user.role === "admin" || user.letInEvents.includes(x.id)}
    ></EventsList>
  );
};

export default Events;
