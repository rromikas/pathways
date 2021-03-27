import SideMenu from "components/SideMenu";
import { useState } from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import EventsIcon from "@material-ui/icons/InsertInvitation";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuNavbar from "components/MenuNavbar";
import Drawer from "@material-ui/core/Drawer";
import { withSize } from "react-sizeme";
import { connect } from "react-redux";
import Navbar from "components/DashboardNavbar";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Events from "./Events";
import Settings from "./Settings";
import { users } from "data";

const Root = ({ size, user }) => {
  const [page, setPage] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  const menuItems = [
    { icon: DashboardIcon, title: "Dashboard" },
    { icon: PersonIcon, title: "Profile" },
    { icon: EventsIcon, title: "Events" },
    { icon: SettingsIcon, title: "Settings" },
  ];

  return (
    <>
      <Drawer anchor="left" open={menuOpened} onClose={() => setMenuOpened(false)}>
        <SideMenu
          page={page}
          setPage={(index) => {
            setPage(index);
            setMenuOpened(false);
          }}
          items={menuItems}
          height={size.height}
        ></SideMenu>
      </Drawer>
      <div className="w-full h-full flex flex-col">
        <MenuNavbar openMenu={() => setMenuOpened(true)}></MenuNavbar>
        <div className="flex-grow flex" style={{ height: 0 }}>
          <div
            className="h-full hidden lg:block"
            style={{ boxShadow: "4px 0px 10px rgba(0,0,0,0.16)" }}
          >
            <SideMenu
              page={page}
              setPage={setPage}
              items={
                user.profileFilled ? menuItems : menuItems.filter((x) => x.title === "Profile")
              }
              height={size.height}
            ></SideMenu>
          </div>
          <div className="flex-grow p-12 overflow-auto">
            <Navbar></Navbar>
            {!user.profileFilled ? (
              <Profile user={user}></Profile>
            ) : page === 0 ? (
              <Dashboard user={user}></Dashboard>
            ) : page === 1 ? (
              <Profile user={user}></Profile>
            ) : page === 2 ? (
              <Events></Events>
            ) : (
              <Settings></Settings>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapp = (state, ...ownProps) => {
  return { user: state.user, ...ownProps };
};

export default withSize({ monitorHeight: true })(connect(mapp)(Root));
