import EventDuration from "components/EventDuration";

const StudentBottom = ({ event, participants }) => {
  return (
    <div className="py-7 border-b border-gray-500">
      <div className="mb-3">{event.title}</div>
      <div className="line-clamp-3 mb-4">{event.description}</div>
      <div className="flex items-center mb-2">
        <div className="w-224px">Participants:</div>
        <div className="w-96px">{participants.length}</div>
        <div className="text-orange-400 cursor-pointer select-none">View</div>
      </div>
      <div className="flex items-center">
        <div className="w-224px">Event duration:</div>
        <div className="w-96px">
          <EventDuration event={event}></EventDuration>
        </div>
      </div>
    </div>
  );
};

export default StudentBottom;
