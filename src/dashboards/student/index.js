import SideMenu from "components/SideMenu";
import { useState } from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import EventsIcon from "@material-ui/icons/InsertInvitation";
import SettingsIcon from "@material-ui/icons/Settings";
import Navbar from "components/MenuNavbar";
import Drawer from "@material-ui/core/Drawer";
import { withSize } from "react-sizeme";
import ConferenceView from "components/ConferenceRoom/ConferenceView";
import Person1 from "assets/person1.png";
import Person2 from "assets/person2.png";
import Person3 from "assets/person3.png";
import Person4 from "assets/person4.png";

const participants = [
  { muted: false, photo: Person1 },
  { muted: true, photo: Person4 },
  { muted: false, photo: Person3 },
  { muted: true, photo: Person1 },
  { muted: true, photo: Person4 },
  { muted: true, photo: Person4 },
  { muted: true, photo: Person3 },
  { muted: false, photo: Person1 },
  { muted: false, photo: Person3 },
  { muted: true, photo: Person4 },
  { muted: true, photo: Person4 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person1 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person4 },
  { muted: false, photo: Person4 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person1 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person1 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person4 },
  { muted: false, photo: Person4 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person1 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person1 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person4 },
  { muted: false, photo: Person4 },
  { muted: false, photo: Person3 },
  { muted: false, photo: Person1 },
  { muted: false, photo: Person3 },
];

const me = { photo: Person2 };

const speaker = { photo: Person1 };

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
        <Navbar openMenu={() => setMenuOpened(true)}></Navbar>
        <div className="flex-grow flex" style={{ height: 0 }}>
          <div
            className="h-full hidden lg:block"
            style={{ boxShadow: "4px 0px 10px rgba(0,0,0,0.16)" }}
          >
            <SideMenu
              page={page}
              setPage={setPage}
              items={menuItems}
              height={size.height}
            ></SideMenu>
          </div>
          <div className="flex-grow p-7 overflow-auto">
            <ConferenceView participants={participants} me={me} speaker={speaker}></ConferenceView>
          </div>
        </div>
      </div>
    </>
  );
};

export default withSize({ monitorHeight: true })(Dashboard);
