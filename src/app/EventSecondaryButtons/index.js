import Button from "components/Button";
import { ReactComponent as InviteIcon } from "assets/invite.svg";
import { ReactComponent as ShareIcon } from "assets/share.svg";
import ConfirmInvite from "components/ConfirmInvite";
import { useNotify } from "notifications";
import ShareButton from "components/ShareButton";
import { useHistory } from "react-router-dom";

const SpeakerOrModeratorButtons = ({ event }) => {
  const notify = useNotify();
  const history = useHistory();
  return (
    <div className="flex flex-wrap items-center">
      <Button
        className="mr-4 my-1 px-7"
        outlined
        onClick={() => history.push("/events/" + event.id)}
      >
        View More
      </Button>
      <Button
        className="mr-4 my-1 px-7"
        outlined
        onClick={() => ConfirmInvite({ event, inviteWho: "Moderator", notify })}
      >
        <div className="flex items-center">
          <InviteIcon className="mr-4"></InviteIcon>
          <div>Invite moderator</div>
        </div>
      </Button>
      <ShareButton className="my-1" event={event}></ShareButton>
    </div>
  );
};

const AdminButtons = ({ event }) => {
  const notify = useNotify();

  return (
    <div className="flex flex-wrap">
      <Button
        className="mr-4 my-1 px-7"
        outlined
        onClick={() => ConfirmInvite({ event, inviteWho: "School Rep./Speakers", notify })}
      >
        <div className="flex items-center">
          <InviteIcon className="mr-4"></InviteIcon>
          <div>Invite school/speaker</div>
        </div>
      </Button>
      <ShareButton className="my-1" event={event}></ShareButton>
    </div>
  );
};

const StudentButtons = ({ event }) => {
  const history = useHistory();
  return (
    <div className="flex flex-wrap items-center">
      <Button
        className="mr-4 my-1 px-7"
        outlined
        onClick={() => history.push("/events/" + event.id)}
      >
        View More
      </Button>
      <ShareButton className="my-1" event={event}></ShareButton>
    </div>
  );
};

const EventSecondaryButtons = ({ user, ...rest }) => {
  return ["speaker", "moderator"].includes(user.role) ? (
    <SpeakerOrModeratorButtons {...rest}></SpeakerOrModeratorButtons>
  ) : user.role === "student" ? (
    <StudentButtons {...rest}></StudentButtons>
  ) : user.role === "admin" ? (
    <AdminButtons {...rest}></AdminButtons>
  ) : null;
};

export default EventSecondaryButtons;
