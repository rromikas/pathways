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
import EventRoomPage from "./EventRoomPage";
import AnalyticsPage from "./AnalyticsPage";

const pageOptions = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    component: DashboardPage,
    props: [
      "events",
      "user",
      "scrollToTop",
      "goToEventPage",
      "goToEventRoom",
      "sendEventRequest",
      "onSaveQuestionnaireAnswers",
      "acceptInvitation",
    ],
  },
  { icon: PersonIcon, title: "Profile", component: ProfilePage, props: ["user"] },
  {
    icon: EventsIcon,
    title: "Events",
    component: EventsPage,
    props: ["events", "user", "goToEventRoom", "goToEventPage", "scrollToTop", "sendEventRequest"],
  },
  { icon: SettingsIcon, title: "Settings", component: SettingsPage, props: [] },
  {
    icon: SettingsIcon,
    title: "Create Event",
    hiddenFromMenu: true,
    component: CraeteEventPage,
    props: ["onCreateEvent", "scrollToTop"],
  },
  {
    icon: SettingsIcon,
    title: "Event",
    hiddenFromMenu: true,
    component: EventPage,
    props: ["event", "scrollToTop"],
  },

  {
    icon: SettingsIcon,
    title: "Event Room",
    hiddenFromMenu: true,
    component: EventRoomPage,
    props: ["event", "user", "scrollToTop", "goToAnalyticsPage"],
  },
  {
    icon: SettingsIcon,
    title: "Analytics",
    hiddenFromMenu: true,
    component: AnalyticsPage,
    props: ["event", "user", "scrollToTop"],
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
