import Button from "components/Button";
import { ReactComponent as InviteIcon } from "assets/invite.svg";
import { ReactComponent as ShareIcon } from "assets/share.svg";

const SpeakerOrModeratorButtons = () => {
  return (
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
  );
};

const AdminButtons = () => {
  return (
    <div className="flex flex-wrap">
      <Button className="mr-4 my-1 px-7" outlined>
        <div className="flex items-center">
          <InviteIcon className="mr-4"></InviteIcon>
          <div>Invite school/speaker</div>
        </div>
      </Button>
      <Button floating className="w-48px my-1 text-orange-400 fill-current">
        <ShareIcon></ShareIcon>
      </Button>
    </div>
  );
};

const StudentButtons = () => {
  return (
    <div className="flex flex-wrap">
      <Button className="mr-4 my-1 px-7" outlined>
        View More
      </Button>
      <Button floating className="w-48px my-1 text-orange-400 fill-current">
        <ShareIcon></ShareIcon>
      </Button>
    </div>
  );
};

const EventSecondaryButtons = ({ user }) => {
  return ["speaker", "moderator"].includes(user.role) ? (
    <SpeakerOrModeratorButtons></SpeakerOrModeratorButtons>
  ) : user.role === "student" ? (
    <StudentButtons></StudentButtons>
  ) : user.role === "admin" ? (
    <AdminButtons></AdminButtons>
  ) : null;
};

export default EventSecondaryButtons;
