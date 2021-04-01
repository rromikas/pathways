import Button from "components/Button";
import { ReactComponent as RequestEventIcon } from "assets/request_event.svg";
import { ReactComponent as JoinEventIcon } from "assets/join_event.svg";
import { ReactComponent as StartEventIcon } from "assets/start_event.svg";

const mainButtonClass = "w-192px text-20px";
const iconClass = "mr-4 w-32px h-32px";

const SpeakerOrModeratorButtons = ({ event, user }) => {
  return user.invitedEvents.includes(event.id) ? (
    <Button className={mainButtonClass} primary>
      Accept invite
    </Button>
  ) : user.letInEvents.includes(event.id) ? (
    <Button className={mainButtonClass} primary>
      <div className="flex items-center">
        <RequestEventIcon className={iconClass}></RequestEventIcon>
        <div className="leading-none">RSVP event</div>
      </div>
    </Button>
  ) : user.requestedEvents.includes(event.id) ? (
    <Button className={mainButtonClass}>
      <div className="flex items-center">
        <RequestEventIcon className={iconClass}></RequestEventIcon>
        <div className="leading-none">RSVP sent</div>
      </div>
    </Button>
  ) : (
    <Button className={mainButtonClass}>
      <div className="flex items-center">
        <JoinEventIcon className={iconClass}></JoinEventIcon>
        <div className="leading-none">Join event</div>
      </div>
    </Button>
  );
};

const AdminButtons = ({ user, event, goToEventRoom }) => {
  return (
    <Button onClick={() => goToEventRoom(event.id)} className={mainButtonClass} primary>
      <div className="flex items-center">
        <StartEventIcon className={iconClass}></StartEventIcon>
        <div className="leading-none">Start event</div>
      </div>
    </Button>
  );
};

const StudentButtons = ({ user, event }) => {
  return user.requestedEvents.includes(event.id) ? (
    <Button className={mainButtonClass}>
      <div className="flex items-center">
        <RequestEventIcon className={iconClass}></RequestEventIcon>
        <div className="leading-none">RSVP sent</div>
      </div>
    </Button>
  ) : (
    <Button className={mainButtonClass} primary>
      <div className="flex items-center">
        <JoinEventIcon className={iconClass}></JoinEventIcon>
        <div className="leading-none">RSVP event</div>
      </div>
    </Button>
  );
};

const EventSecondaryButtons = ({ user, event, goToEventRoom }) => {
  return ["speaker", "moderators"].includes(user.role) ? (
    <SpeakerOrModeratorButtons user={user} event={event}></SpeakerOrModeratorButtons>
  ) : user.role === "student" ? (
    <StudentButtons user={user} event={event}></StudentButtons>
  ) : user.role === "admin" ? (
    <AdminButtons user={user} event={event} goToEventRoom={goToEventRoom}></AdminButtons>
  ) : null;
};

export default EventSecondaryButtons;
