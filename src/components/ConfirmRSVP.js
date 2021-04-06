import { confirmable, createConfirmation } from "react-confirm";
import Button from "components/Button";
import { useState } from "react";
import moment from "moment";
import DateIcon from "@material-ui/icons/InsertInvitation";
import TimeIcon from "@material-ui/icons/AccessTime";

const ConfirmRSVP = ({ event, proceed }) => {
  const [show, setShow] = useState(true); // for some reason after cancelling, popup closes with delay.
  return show ? (
    <div
      onClick={() => {
        proceed(false);
        setShow(false);
      }}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        background: `rgba(0,0,0,0.4)`,
      }}
      className="flex overflow-auto p-7"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 600, width: "100%", background: "white", borderRadius: 11 }}
        className="p-12 m-auto"
      >
        <div className="mb-16 text-center text-20px" style={{ fontSize: 18, fontWeight: 700 }}>
          Are you sure to RSVP the event?
        </div>
        <div className="flex flex-wrap sm:flex-nowrap mb-12">
          <div className="relative sm:mr-7 mb-7 mx-auto">
            <div
              className="w-160px rounded-md bg-left bg-cover"
              style={{ paddingTop: "115%", backgroundImage: `url(${event.image})` }}
            ></div>
          </div>
          <div>
            <div className="text-18px mb-4">{event.title}</div>
            <div className="line-clamp-3 mb-4">{event.description}</div>
            <div className="flex items-center">
              <div className="flex items-center mr-7">
                <TimeIcon className="mr-3 text-orange-300 fill-current"></TimeIcon>
                <div className="text-blue-400">{moment(event.time).format("hh:mm A")}</div>
              </div>
              <div className="flex items-center">
                <DateIcon className="mr-3 text-orange-300 fill-current"></DateIcon>
                <div className="text-blue-400">{moment(event.date).format("DD/MM/YYYY")}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex justify-center flex-wrap">
            <Button
              className="mx-2 bg-red-300 hover:bg-red-301 w-192px my-2"
              onClick={() => {
                setShow(false);
                proceed(false);
              }}
            >
              Cancel
            </Button>
            <Button
              className="w-192px my-2 mx-2"
              onClick={() => {
                proceed(true);
                setShow(false);
              }}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default createConfirmation(confirmable(ConfirmRSVP));
