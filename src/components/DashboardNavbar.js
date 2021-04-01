import { ReactComponent as BellIcon } from "assets/bell.svg";
import { connect } from "react-redux";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Drawer from "@material-ui/core/Drawer";
import { useState } from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { store } from "store";
import { useHistory } from "react-router-dom";
import { ReactComponent as SearchIcon } from "assets/search.svg";
import Button from "components/Button";
import AddIcon from "@material-ui/icons/Add";
import Input from "components/Input";

const DashboardNavbar = ({ user, goToCreateEventPage }) => {
  const [openUserOptions, setOpenUserOptions] = useState(false);
  const history = useHistory();
  const userOptions = [
    {
      title: "Logout",
      action: () => {
        store.dispatch({ type: "SET_USER", payload: null });
        history.push("/sign-in");
      },
    },
  ];
  return (
    <>
      <Drawer
        open={openUserOptions}
        onClose={() => setOpenUserOptions(false)}
        anchor="right"
        classes={{ paper: "max-w-3gd w-full" }}
      >
        <div className="bg-white p-12 w-full flex flex-col">
          <div className="flex items-center mb-4">
            <div className="w-56px h-56px rounded-full bg-gray-400 flex items-center justify-center mr-4">
              <BellIcon></BellIcon>
            </div>
            <div
              className="w-56px h-56px rounded-full bg-center bg-cover border-4 mr-3 border-blue-400"
              style={{ backgroundImage: `url(${user.image})` }}
            ></div>
          </div>
          {userOptions.map((x, i) => (
            <ButtonBase
              key={`user-option-${i}`}
              className={`w-full mb-7 outline-none rounded-md transition-colors duration-200 ease-in-out cursor-pointer px-4 py-5 text-white bg-orange-400 hover:bg-orange-500`}
              onClick={x.action}
            >
              <div className="leading-none">{x.title}</div>
            </ButtonBase>
          ))}
        </div>
      </Drawer>
      <div className="flex justify-between items-center mb-2 px-12 pt-9 pb-4">
        <div className="flex-grow relative flex pr-5" style={{ maxWidth: 850 }}>
          <SearchIcon className="absolute top-0 bottom-0 m-auto left-3 w-24px"></SearchIcon>
          <Input
            spellCheck={false}
            placeholder="Search an event"
            className="pl-68px w-full mr-3"
          ></Input>
          {user.role === "admin" ? (
            <Button onClick={goToCreateEventPage}>
              <div className="flex items-center text-18px whitespace-nowrap px-3">
                <AddIcon className="mr-3 text-32px" fontSize="inherit"></AddIcon>
                Create event
              </div>
            </Button>
          ) : null}
        </div>
        <div className="flex items-center">
          <div className="w-56px h-56px rounded-full bg-gray-400 flex items-center justify-center mr-4">
            <BellIcon></BellIcon>
          </div>
          <div
            className="w-56px h-56px rounded-full bg-center bg-cover border-4 mr-3 border-blue-400"
            style={{ backgroundImage: `url(${user.image})` }}
          ></div>
          <MoreVertIcon
            onClick={() => setOpenUserOptions(true)}
            className="text-gray-800 text-32px cursor-pointer"
            fontSize="inherit"
          ></MoreVertIcon>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
