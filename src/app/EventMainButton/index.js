import Button from "components/Button";
import { ReactComponent as RequestEventIcon } from "assets/request_event.svg";
import { ReactComponent as JoinEventIcon } from "assets/join_event.svg";
import { ReactComponent as StartEventIcon } from "assets/start_event.svg";
import ConfirmRSVP from "components/ConfirmRSVP";

const mainButtonClass = "w-192px text-20px";
const iconClass = "mr-4 w-32px h-32px";

const SpeakerOrModeratorButtons = ({
  event,
  user,
  goToEventRoom,
  sendEventRequest,
  acceptInvitation,
}) => {
  return user.letInEvents.includes(event.id) ? (
    <Button className={mainButtonClass} onClick={() => goToEventRoom(event.id)}>
      <div className="flex items-center">
        <JoinEventIcon className={iconClass}></JoinEventIcon>
        <div className="leading-none">Join event</div>
      </div>
    </Button>
  ) : user.invitedEvents.includes(event.id) ? (
    <Button className={mainButtonClass} primary onClick={() => acceptInvitation(event.id)}>
      Accept invite
    </Button>
  ) : user.requestedEvents.includes(event.id) ? (
    <Button className={mainButtonClass}>
      <div className="flex items-center">
        <RequestEventIcon className={iconClass}></RequestEventIcon>
        <div className="leading-none">RSVP sent</div>
      </div>
    </Button>
  ) : (
    <Button
      className={mainButtonClass}
      primary
      onClick={async () => {
        const res = await ConfirmRSVP({ event });
        if (res) {
          sendEventRequest(event.id);
        }
      }}
    >
      <div className="flex items-center">
        <RequestEventIcon className={iconClass}></RequestEventIcon>
        <div className="leading-none">RSVP event</div>
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

const StudentButtons = ({ user, event, goToEventRoom, sendEventRequest }) => {
  return user.letInEvents.includes(event.id) ? (
    <Button className={mainButtonClass} primary onClick={() => goToEventRoom(event.id)}>
      <div className="flex items-center">
        <JoinEventIcon className={iconClass}></JoinEventIcon>
        <div className="leading-none">Join event</div>
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
    <Button
      className={mainButtonClass}
      primary
      onClick={async () => {
        const res = await ConfirmRSVP({ event });
        if (res) {
          sendEventRequest(event.id);
        }
      }}
    >
      <div className="flex items-center">
        <RequestEventIcon className={iconClass}></RequestEventIcon>
        <div className="leading-none">RSVP event</div>
      </div>
    </Button>
  );
};

const EventMainButton = (props) => {
  return ["speaker", "moderator"].includes(props.user.role) ? (
    <SpeakerOrModeratorButtons {...props}></SpeakerOrModeratorButtons>
  ) : props.user.role === "student" ? (
    <StudentButtons {...props}></StudentButtons>
  ) : props.user.role === "admin" ? (
    <AdminButtons {...props}></AdminButtons>
  ) : null;
};

export default EventMainButton;
