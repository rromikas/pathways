import EventRoom from "components/EventRoom";
import EventRoomBottom from "./EventRoomBottom";
import { useState, useEffect } from "react";
import { participants, messages } from "data";

const EventRoomPage = ({ event, user, scrollToTop }) => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <EventRoom
      user={user}
      participants={participants}
      messages={messages}
      event={event}
      prepareTitlePosition={user.role === "student" ? "bottom" : "top"}
      prepareTitle={
        user.role === "student"
          ? "Please select your speaker or school representative"
          : "Students are joining!"
      }
    >
      <EventRoomBottom user={user} participants={participants} event={event}></EventRoomBottom>
    </EventRoom>
  );
};

export default EventRoomPage;
