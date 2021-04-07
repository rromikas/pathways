// import DashboardIcon from "@material-ui/icons/Dashboard";
import { ReactComponent as ProfileIcon } from "assets/profile.svg";
// import EventsIcon from "@material-ui/icons/InsertInvitation";
// import SettingsIcon from "@material-ui/icons/Settings";
import { ReactComponent as SettingsIcon } from "assets/settings.svg";
import { ReactComponent as EventsIcon } from "assets/events.svg";
import { ReactComponent as DashboardIcon } from "assets/dashboard.svg";

export const MenuItems = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    pathname: "/",
  },
  { icon: ProfileIcon, title: "Profile", pathname: "/profile" },
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
