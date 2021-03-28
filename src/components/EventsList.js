import PropTypes from "prop-types";
import EventPropType from "propTypes/Event";
import Pagination from "components/Pagination";
import { useState } from "react";
import Button from "components/Button";
import { ReactComponent as InviteIcon } from "assets/invite.svg";
import { ReactComponent as ShareIcon } from "assets/share.svg";
import DateIcon from "@material-ui/icons/InsertInvitation";
import TimeIcon from "@material-ui/icons/AccessTime";
import moment from "moment";

const Event = ({ event, mainButton, secondaryButtons }) => {
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
            <div className="flex flex-wrap">
              <Button className="mr-4 my-1 px-7" outlined>
                View More
              </Button>
              <Button className="mr-4 my-1 px-7" outlined>
                <div className="flex items-center">
                  <InviteIcon className="mr-4"></InviteIcon>
                  <div>Invite moderator</div>
                </div>
              </Button>
              <Button floating className="w-48px my-1 text-orange-400 fill-current">
                <ShareIcon></ShareIcon>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-grow sm:justify-end items-center py-3">
        <Button className="w-auto px-7 text-20px" primary>
          Accept event invite
        </Button>
      </div>
    </div>
  );
};

const EventsList = ({ events, mainButton, secondaryButtons, eventsPerPage = 10 }) => {
  const [page, setPage] = useState(0);

  return (
    <div>
      {events.slice(page * eventsPerPage, page * eventsPerPage + eventsPerPage).map((ev, i) => (
        <Event
          key={`event-${i}`}
          event={ev}
          mainButton={mainButton}
          secondaryButtons={secondaryButtons}
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
};
