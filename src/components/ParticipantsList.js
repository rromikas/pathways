import { useState } from "react";
import Simplebar from "simplebar-react";
import Select from "components/Select";

const ParticipantsList = ({ participants, dark = true }) => {
  const [role, setRole] = useState("All");

  return (
    <div className="flex-grow flex flex-col h-0">
      <div
        className={`flex flex-wrap justify-between items-center px-7 py-3 border-b ${
          dark ? "border-white" : "border-blue-400"
        }`}
      >
        <div className="my-2">Participants</div>
        <div className="w-160px">
          <Select
            dark={!dark}
            outlined
            items={["All", "Students", "Speakers", "Moderators"]}
            setValue={(val) => setRole(val)}
            value={role}
          ></Select>
        </div>
      </div>
      <div className="flex-grow h-0">
        <Simplebar className="p-7 h-full">
          {participants
            .filter((x) => {
              const roleLow = role.toLowerCase();
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
  );
};

export default ParticipantsList;
