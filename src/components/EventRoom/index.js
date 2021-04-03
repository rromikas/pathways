import ConferenceView from "./ConferenceView";
import Chat from "./Chat";
import React, { useEffect, useState } from "react";
import Participants from "./Participants";
import Toolbar from "./Toolbar";

const ConferenceRoom = ({
  user,
  participants,
  messages,
  children,
  event,
  prepareTitle,
  prepareTitlePosition,
}) => {
  const [speaker, setSpeaker] = useState(null);
  const [showParticipants, setShowParticipants] = useState(false);
  const [activeView, setActiveView] = useState("Conference"); // on small screens toolbar will appear to select view

  useEffect(() => {
    setSpeaker(participants[0]);
  }, [participants]);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { setShowParticipants, activeView });
    }
    return child;
  });
  return (
    <div>
      <div className="flex">
        <div className={`flex-grow ${activeView === "Conference" ? "block" : "hidden"} xl:block`}>
          <ConferenceView
            prepareTitle={prepareTitle}
            prepareTitlePosition={prepareTitlePosition}
            participants={participants}
            me={user}
            speaker={speaker}
            activeView={activeView}
            event={event}
          ></ConferenceView>
        </div>
        <Chat messages={messages} activeView={activeView}></Chat>
        <Participants
          onClose={() => setShowParticipants(false)}
          participants={participants}
          showParticipants={showParticipants}
        ></Participants>
      </div>
      <Toolbar activeView={activeView} setActiveView={setActiveView}></Toolbar>
      {childrenWithProps}
    </div>
  );
};

export default ConferenceRoom;
