import DateIcon from "@material-ui/icons/InsertInvitation";
import TimeIcon from "@material-ui/icons/AccessTime";
import moment from "moment";
import { useEffect } from "react";

const EventPage = ({ events, scrollToTop, match }) => {
  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  const eventId = match.params.id;
  const event = events.find((x) => +x.id === +eventId);

  return event ? (
    <div className="flex flex-wrap justify-center p-12 m-auto">
      <div className="xl:w-1/2 lg:w-full lg:mb-12 md:w-1/2 w-full mb-12 xl:border-r lg:border-0 md:border-r border-gray-500 xl:pr-12 md:pr-12">
        <div className="flex justify-center mb-9">
          <div>
            <div
              className="w-160px rounded-md bg-left bg-cover"
              style={{ paddingTop: "115%", backgroundImage: `url(${event.image})` }}
            ></div>
          </div>
        </div>
        <div className="flex justify-center items-center mb-9">
          <div className="flex items-center mr-4">
            <TimeIcon className="mr-3 text-orange-400 fill-current"></TimeIcon>
            <div>{moment(new Date(event.time)).format("hh:mm A")}</div>
          </div>
          <div className="flex items-center">
            <DateIcon className="mr-3 text-orange-400 fill-current "></DateIcon>
            <div>{moment(new Date(event.date)).format("DD/MM/YYYY")}</div>
          </div>
        </div>
        <div className="text-center max-w-620px mx-auto">
          <div className="mb-4 text-18px font-medium">{event.title}</div>
          <div>{event.description}</div>
        </div>
      </div>
      <div className="xl:w-1/2 lg:w-full md:w-1/2 w-full xl:pl-12 md:pl-12 max-w-620px">
        <div className="text-blue-400 mb-7">Event details</div>
        {event.details.map((x, i) => (
          <div key={`detail-${i}`} className="flex items-start mb-4 max-w-512px">
            <div>{moment(x.time).format("h:mm A")}</div>
            <div className="flex-grow border-b border-gray-500 border-dashed h-18px mx-2"></div>
            <div className="w-160px">
              <div className="text-blue-400 font-medium mb-1">{x.topic}</div>
              <pre className="font-normal">{x.description}</pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default EventPage;
