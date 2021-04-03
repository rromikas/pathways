import Drawer from "@material-ui/core/Drawer";
import Select from "components/Select";
import { useState } from "react";
import Simplebar from "simplebar-react";
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
        <div className="flex justify-between items-center px-7 py-3">
          <div>Participants</div>
          <div className="w-160px">
            <Select
              outlined
              items={["All", "Students", "Speakers", "Moderators"]}
              setValue={(val) => setRole(val)}
              value={role}
            ></Select>
          </div>
        </div>
        <div className="flex-grow min-h-0">
          <Simplebar className="p-7 h-full">
            {participants
              .filter((x) => {
                const roleLow = role.toLowerCase();
                console.log(roleLow.substring(0, roleLow.length - 1), x.role);
                return roleLow === "all" || x.role === roleLow.substring(0, roleLow.length - 1);
              })
              .map((x, i) => (
                <div key={`participant-${i}`} className="flex items-center mb-3">
                  <div
                    className="w-48px h-48px bg-center bg-cover rounded-full mr-3"
                    style={{ backgroundImage: `url(${x.image})` }}
                  ></div>
                  <div>{x.fullName}</div>
                </div>
              ))}
          </Simplebar>
        </div>
      </div>
    </Drawer>
  );
};

export default Participants;
