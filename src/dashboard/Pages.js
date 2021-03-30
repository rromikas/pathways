import ProfilePage from "./ProfilePage";
import DashboardPage from "./DashboardPage";
import EventsPage from "./EventsPage";
import SettingsPage from "./SettingsPage";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import EventsIcon from "@material-ui/icons/InsertInvitation";
import SettingsIcon from "@material-ui/icons/Settings";
import CraeteEventPage from "./CreateEventPage";

const pageOptions = [
  { icon: DashboardIcon, title: "Dashboard", component: DashboardPage },
  { icon: PersonIcon, title: "Profile", component: ProfilePage },
  { icon: EventsIcon, title: "Events", component: EventsPage },
  { icon: SettingsIcon, title: "Settings", component: SettingsPage },
  { icon: SettingsIcon, title: "Create Event", hiddenFromMenu: true, component: CraeteEventPage },
];

export const getPages = (user) => {
  switch (user.role) {
    case "student":
      if (!user.profileFilled) {
        return pageOptions.filter((x) => x.title === "Profile");
      }
      return pageOptions;

    case "admin":
      return pageOptions.filter((x) => x.title !== "Profile");
    default:
      return pageOptions;
  }
};
