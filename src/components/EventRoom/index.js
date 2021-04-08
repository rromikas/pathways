import ConferenceView from "./ConferenceView";
import Chat from "./Chat";
import React, { useState } from "react";
import Participants from "./Participants";
import Toolbar from "./Toolbar";
import useTime from "hooks/useTime";
import moment from "moment";

const ConferenceRoom = ({
  user,
  participants,
  messages,
  children,
  event,
  prepareTitle,
  prepareTitlePosition,
  speaker,
  breakoutRooms,
}) => {
  const [showParticipants, setShowParticipants] = useState(false);
  const [activeView, setActiveView] = useState("Conference"); // on small screens toolbar will appear to select view

  const { time, stopTimer } = useTime();
  const startTime = moment(
    moment(event.date).format("YYYY-MM-DD") + " " + moment(event.time).format("HH:mm:ss")
  );
  const nowTime = moment(time);
  const duration = moment.duration(startTime.diff(nowTime));
  const secondsLeft = duration.asSeconds();

  if (secondsLeft < -3) {
    stopTimer();
  }

  const [breakoutRoomId, setBreakoutRoomId] = useState(null);

  const finalParticipants = breakoutRoomId
    ? breakoutRooms.find((x) => x.id === breakoutRoomId).participants
    : participants;

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        setShowParticipants,
        activeView,
        isTimeToSelectSpeaker: !user.selectedSpeaker && secondsLeft <= 60,
        setBreakoutRoomId,
        breakoutRoomId,
        participants,
      });
    }
    return child;
  });
  return (
    <div>
      <div className="flex">
        <div
          className={`flex-grow ${
            activeView === "Conference" ? "block" : "hidden"
          } xl:block xl:mr-4`}
        >
          <ConferenceView
            prepareTitle={prepareTitle}
            prepareTitlePosition={prepareTitlePosition}
            participants={finalParticipants}
            me={user}
            speaker={speaker}
            activeView={activeView}
            secondsLeft={secondsLeft}
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
