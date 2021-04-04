import Drawer from "@material-ui/core/Drawer";
import ParticipantsList from "components/ParticipantsList";
import { useState } from "react";

import CloseIcon from "@material-ui/icons/Close";

const Participants = ({ participants, showParticipants, onClose }) => {
  console.log("partici", participants);
  const [role, setRole] = useState("All");
  return (
    <Drawer anchor="right" variant="persistent" open={showParticipants} onClose={onClose}>
      <div className="w-420px h-full flex flex-col bg-blue-400 text-white">
        <div className="pt-7 px-7">
          <CloseIcon className="cursor-pointer" onClick={onClose}></CloseIcon>
        </div>
        <ParticipantsList participants={participants}></ParticipantsList>
      </div>
    </Drawer>
  );
};

export default Participants;
