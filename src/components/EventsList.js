import PropTypes from "prop-types";
import EventPropType from "propTypes/Event";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import DateIcon from "@material-ui/icons/InsertInvitation";
import TimeIcon from "@material-ui/icons/AccessTime";
import moment from "moment";
import { Flipper, Flipped, spring } from "react-flip-toolkit";

const Event = ({
  event,
  user,
  MainButton,
  SecondaryButtons,
  goToEventPage,
  goToEventRoom,
  sendEventRequest,
  acceptInvitation,
  index,
}) => {
  return (
    <Flipped flipId={`event-${event.id}`}>
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
                  <div>{moment(event.time).format("hh:mm A")}</div>
                </div>
                <div className="flex items-center">
                  <DateIcon className="mr-3"></DateIcon>
                  <div>{moment(event.date).format("DD/MM/YYYY")}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-512px mr-7 xl:h-full flex flex-col">
            <div className="text-20px mb-4 line-clamp-1">{event.title}</div>
            <div className="line-clamp-3 text-blue-400 mb-4">{event.description}</div>
            <div className="flex-grow items-end flex">
              <SecondaryButtons
                user={user}
                event={event}
                goToEventPage={goToEventPage}
              ></SecondaryButtons>
            </div>
          </div>
        </div>
        <div className="flex flex-grow sm:justify-end items-center py-3">
          <MainButton
            acceptInvitation={acceptInvitation}
            goToEventRoom={goToEventRoom}
            user={user}
            event={event}
            sendEventRequest={sendEventRequest}
          ></MainButton>
        </div>
      </div>
    </Flipped>
  );
};

const EventsList = ({ events, scrollToTop, filterFunction, eventsPerPage = 20, ...rest }) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    scrollToTop();
  }, [page]);

  const eventsArr = events.filter(filterFunction);

  return (
    <Flipper flipKey={eventsArr.length}>
      {eventsArr.slice(page * eventsPerPage, page * eventsPerPage + eventsPerPage).map((ev, i) => (
        <Event key={`event-${i}`} event={ev} {...rest}></Event>
      ))}
      <div className="flex justify-end py-7">
        <Pagination
          count={Math.ceil(eventsArr.length / eventsPerPage)}
          setPage={(nr) => setPage(nr - 1)}
        ></Pagination>
      </div>
    </Flipper>
  );
};

export default EventsList;

EventsList.propTypes = {
  events: PropTypes.arrayOf(EventPropType).isRequired,
  user: PropTypes.object.isRequired,
};
