import PropTypes from "prop-types";
import EventPropType from "propTypes/Event";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import DateIcon from "@material-ui/icons/InsertInvitation";
import TimeIcon from "@material-ui/icons/AccessTime";
import moment from "moment";

const Event = ({ event, user, MainButton, SecondaryButtons, goToEventPage }) => {
  return (
    <div className="flex flex-wrap xl:flex-nowrap py-7 border-b border-gray-600">
      <div className="flex flex-wrap sm:flex-nowrap">
        <div className="relative self-start mr-10 mb-3">
          <div
            className="w-160px rounded-md bg-left bg-cover"
            style={{ paddingTop: "115%", backgroundImage: `url(${event.image})` }}
          ></div>
          <div className="absolute rounded-md left-0 top-0 w-full h-full flex items-end bg-gradient-to-b from-transparent to-blue-0.86">
            <div className="text-white p-3">
              <div className="flex items-center mb-2">
                <TimeIcon className="mr-3"></TimeIcon>
                <div>{moment(new Date(event.dateTime)).format("hh:mm A")}</div>
              </div>
              <div className="flex items-center">
                <DateIcon className="mr-3"></DateIcon>
                <div>{moment(new Date(event.dateTime)).format("DD/MM/YYYY")}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-512px mr-7">
          <div className="text-20px mb-4 line-clamp-1">{event.title}</div>
          <div className="line-clamp-3 text-blue-400 mb-4">{event.description}</div>
          <div>
            <SecondaryButtons
              user={user}
              event={event}
              goToEventPage={goToEventPage}
            ></SecondaryButtons>
          </div>
        </div>
      </div>
      <div className="flex flex-grow sm:justify-end items-center py-3">
        <MainButton user={user} event={event}></MainButton>
      </div>
    </div>
  );
};

const EventsList = ({
  events,
  MainButton,
  SecondaryButtons,
  eventsPerPage = 10,
  user,
  scrollToTop = () => {},
  goToEventPage,
}) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    scrollToTop();
  }, [page]);

  return (
    <div>
      {events.slice(page * eventsPerPage, page * eventsPerPage + eventsPerPage).map((ev, i) => (
        <Event
          key={`event-${i}`}
          event={ev}
          MainButton={MainButton}
          user={user}
          SecondaryButtons={SecondaryButtons}
          goToEventPage={goToEventPage}
        ></Event>
      ))}
      <div className="flex justify-end py-7">
        <Pagination
          count={Math.ceil(events.length / eventsPerPage)}
          setPage={(nr) => setPage(nr - 1)}
        ></Pagination>
      </div>
    </div>
  );
};

export default EventsList;

EventsList.propTypes = {
  events: PropTypes.arrayOf(EventPropType).isRequired,
  user: PropTypes.object.isRequired,
};
