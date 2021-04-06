import { confirmable, createConfirmation } from "react-confirm";
import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const Profile = ({ user, proceed, zIndex }) => {
  const [show, setShow] = useState(true);

  return show ? (
    <div
      onClick={() => {
        setShow(false);
        proceed(false);
      }}
      style={{ zIndex: zIndex ? zIndex : 100 }}
      className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-40 flex p-7 overflow-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg p-7 m-auto max-w-512px w-full text-center relative"
      >
        <IconButton
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => {
            setShow(false);
            proceed(false);
          }}
        >
          <CloseIcon></CloseIcon>
        </IconButton>

        <div className="flex justify-center mb-18px">
          <div
            className="w-192px h-192px rounded-full bg-center bg-cover border-4 border-blue-400"
            style={{
              backgroundImage: `url(${user.image})`,
            }}
          ></div>
        </div>
        <div
          className={`${
            user.role !== "student" ? "text-orange-400" : "text-blue-400"
          } text-24px font-medium mb-18px`}
        >
          {user.fullName ? user.fullName : "Your name"}
        </div>
        <div className="text-18px mb-14px text-blue-400">Representing - {user.school}</div>
        <div className="break-words line-clamp-4">
          {user.about
            ? user.about
            : "Here will appear information about you that will be visible for other users"}
        </div>
      </div>
    </div>
  ) : null;
};

export default createConfirmation(confirmable(Profile));
