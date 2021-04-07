import { lazy } from "react";

const DashboardPage = lazy(() => import("./DashboardPage"));
const ProfilePage = lazy(() => import("./ProfilePage"));
const EventsPage = lazy(() => import("./EventsPage"));
const EventPage = lazy(() => import("./EventPage"));
const CreateEventPage = lazy(() => import("./CreateEventPage"));
const EventRoomPage = lazy(() => import("./EventRoomPage"));
const SettingsPage = lazy(() => import("./SettingsPage"));

export const Routes = [
  { pathname: "/", component: DashboardPage },
  { pathname: "/profile", component: ProfilePage },
  { pathname: "/events/:id", component: EventPage },
  { pathname: "/events/new", component: CreateEventPage },
  { pathname: "/events", component: EventsPage },
  { pathname: "/events/:id/live", component: EventRoomPage },
  { pathname: "/settings", component: SettingsPage },
];
