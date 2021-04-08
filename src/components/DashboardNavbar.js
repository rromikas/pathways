import { ReactComponent as BellIcon } from "assets/bell.svg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Drawer from "@material-ui/core/Drawer";
import { useState } from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { useHistory, useLocation } from "react-router-dom";
import { ReactComponent as SearchIcon } from "assets/search.svg";
import Button from "components/Button";
import AddIcon from "@material-ui/icons/Add";
import BlueFill from "assets/blue_fill.png";

const DashboardNavbar = ({ user, logout }) => {
  const [openUserOptions, setOpenUserOptions] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const userOptions = [
    {
      title: "Logout",
      action: () => {
        logout();
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
              style={{ backgroundImage: `url(${user ? user.image : BlueFill})` }}
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
      <div className="flex flex-wrap sm:flex-nowrap justify-between items-center pt-9 pb-4">
        {/^\/events.*live$/.test(location.pathname) ? (
          <div className="flex-grow flex-wrap sm:flex-nowrap flex pr-5" style={{ maxWidth: 850 }}>
            <div className="flex-grow flex relative mb-3">
              <SearchIcon className="absolute top-0 bottom-0 m-auto left-3 w-32px"></SearchIcon>
              <input
                spellCheck={false}
                placeholder="Search an event"
                className="pl-68px transition w-full mr-3 bg-gray-400 hover:bg-gray-401 focus:bg-blue-100 rounded-md h-56px placeholder-blue-400 outline-none"
              ></input>
            </div>

            {user.role === "admin" ? (
              <Button className="h-56px mb-3" onClick={() => history.push("/events/new")}>
                <div className="flex items-center text-18px whitespace-nowrap px-3">
                  <AddIcon className="mr-3 text-32px" fontSize="inherit"></AddIcon>
                  Create event
                </div>
              </Button>
            ) : null}
          </div>
        ) : (
          <div></div>
        )}
        <div className="flex items-center mb-3">
          <div className="w-56px h-56px rounded-full bg-gray-400 flex items-center justify-center mr-4">
            <BellIcon></BellIcon>
          </div>
          <div
            className="w-56px h-56px rounded-full bg-center bg-cover border-4 mr-3 border-blue-400"
            style={{ backgroundImage: `url(${user ? user.image : BlueFill})` }}
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
