import Drawer from "@material-ui/core/Drawer";
import ParticipantsList from "components/ParticipantsList";

import CloseIcon from "@material-ui/icons/Close";

const Participants = ({ participants, showParticipants, onClose }) => {
  return (
    <Drawer anchor="right" variant="persistent" open={showParticipants} onClose={onClose}>
      <div className="sm:w-435px w-330px h-full flex flex-col bg-blue-400 text-white">
        <div className="pt-7 px-7">
          <CloseIcon className="cursor-pointer" onClick={onClose}></CloseIcon>
        </div>
        <ParticipantsList participants={participants}></ParticipantsList>
      </div>
    </Drawer>
  );
};

export default Participants;
