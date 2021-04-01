import ProfilePage from "./ProfilePage";
import DashboardPage from "./DashboardPage";
import EventsPage from "./EventsPage";
import SettingsPage from "./SettingsPage";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import EventsIcon from "@material-ui/icons/InsertInvitation";
import SettingsIcon from "@material-ui/icons/Settings";
import CraeteEventPage from "./CreateEventPage";
import EventPage from "./EventPage";

const pageOptions = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    component: DashboardPage,
    props: ["events", "user", "scrollToTop", "goToEventPage", "goToEventRoom"],
  },
  { icon: PersonIcon, title: "Profile", component: ProfilePage, props: ["user"] },
  {
    icon: EventsIcon,
    title: "Events",
    component: EventsPage,
    props: ["events", "user", "scrollToTop", "goToEventPage"],
  },
  { icon: SettingsIcon, title: "Settings", component: SettingsPage, props: [] },
  {
    icon: SettingsIcon,
    title: "Create Event",
    hiddenFromMenu: true,
    component: CraeteEventPage,
    props: ["onCreateEvent"],
  },
  {
    icon: SettingsIcon,
    title: "Event",
    hiddenFromMenu: true,
    component: EventPage,
    props: ["event"],
  },
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
