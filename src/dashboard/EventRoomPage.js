import EventRoom from "components/EventRoom";
import EventRoomBottom from "./EventRoomBottom";
import { useState, useEffect } from "react";
import { participants, messages } from "data";

const EventRoomPage = ({ event, user, scrollToTop }) => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <EventRoom user={user} participants={participants} messages={messages}>
      <EventRoomBottom role={user.role} participants={participants} event={event}></EventRoomBottom>
    </EventRoom>
  );
};

export default EventRoomPage;
