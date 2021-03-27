import PropTypes from "prop-types";
import EventPropType from "propTypes/Event";
import Pagination from "components/Pagination";

const Event = ({ event, mainButton, secondaryButtons }) => {
  return (
    <div className="flex">
      <div></div>
      <div>
        <div>{event.title}</div>
        <div>{event.description}</div>
        <div>{secondaryButtons}</div>
      </div>
      <div className="flex items-center">{mainButton}</div>
    </div>
  );
};

const EventsList = ({ events, mainButton, secondaryButtons }) => {
  return (
    <div>
      {events.map((ev, i) => (
        <Event
          key={`event-${i}`}
          event={ev}
          mainButton={mainButton}
          secondaryButtons={secondaryButtons}
        ></Event>
      ))}
      <Pagination></Pagination>
    </div>
  );
};

export default EventsList;

EventsList.propTypes = {
  events: PropTypes.arrayOf(EventPropType),
  mainButton: PropTypes.instanceOf(Element).isRequired,
  secondaryButtons: PropTypes.instanceOf(Element).isRequired,
};
