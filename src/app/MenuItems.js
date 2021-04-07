import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import EventsIcon from "@material-ui/icons/InsertInvitation";
import SettingsIcon from "@material-ui/icons/Settings";

export const MenuItems = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    pathname: "/",
  },
  { icon: PersonIcon, title: "Profile", pathname: "/profile" },
  {
    icon: EventsIcon,
    title: "Events",
    pathname: "/events",
  },
  {
    icon: SettingsIcon,
    title: "Settings",
    pathname: "/settings",
  },
  {
    icon: SettingsIcon,
    title: "Create Event",
    hiddenFromMenu: true,
  },
  {
    icon: SettingsIcon,
    title: "Event",
    hiddenFromMenu: true,
  },

  {
    icon: SettingsIcon,
    title: "Event Room",
    hiddenFromMenu: true,
  },
  {
    icon: SettingsIcon,
    title: "Analytics",
    hiddenFromMenu: true,
  },
];
