import SideMenu from "components/SideMenu";
import { useState } from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import EventsIcon from "@material-ui/icons/InsertInvitation";
import SettingsIcon from "@material-ui/icons/Settings";
import Navbar from "components/Navbar";
import Drawer from "@material-ui/core/Drawer";
import { withSize } from "react-sizeme";

const Dashboard = ({ size }) => {
  const [page, setPage] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  const menuItems = [
    { icon: DashboardIcon, title: "Dashboard" },
    { icon: PersonIcon, title: "Profile" },
    { icon: EventsIcon, title: "Events" },
    { icon: SettingsIcon, title: "Settings" },
  ];

  return (
    <div className="w-full h-full flex">
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
      <Navbar openMenu={() => setMenuOpened(true)}></Navbar>
      <div
        className="h-full hidden lg:block"
        style={{ boxShadow: "4px 0px 10px rgba(0,0,0,0.16)" }}
      >
        <SideMenu page={page} setPage={setPage} items={menuItems} height={size.height}></SideMenu>
      </div>
    </div>
  );
};

export default withSize({ monitorHeight: true })(Dashboard);