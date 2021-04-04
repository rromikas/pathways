import EventRoom from "components/EventRoom";
import EventRoomBottom from "./EventRoomBottom";
import { useState, useEffect } from "react";
import { participants } from "data";

const EventRoomPage = ({ scrollToTop, ...rest }) => {
  useEffect(() => {
    scrollToTop();
  }, []);
  const user = rest.user;
  return (
    <EventRoom
      {...rest}
      participants={participants}
      prepareTitlePosition={user.role === "student" ? "bottom" : "top"}
      prepareTitle={
        user.role === "student"
          ? "Please select your speaker or school representative"
          : "Students are joining!"
      }
    >
      <EventRoomBottom participants={participants} {...rest}></EventRoomBottom>
    </EventRoom>
  );
};

export default EventRoomPage;
