import React, { Suspense, useEffect, useState } from "react";
import "simplebar/dist/simplebar.min.css";
import { Switch, Route, useHistory } from "react-router-dom";
import SignIn from "auth/SignIn";
import SignUp from "auth/SignUp";
import ForgotPassword from "auth/ForgotPassword";
import ScreenSizeBadge from "components/ScreenSizeBadge";
import {
  users as initialUsers,
  events as initialEvents,
  messages as initialMessages,
  settings as initialSettings,
} from "data";
import NotificationsProvider from "notifications";
import Loader from "components/Loader";
import Dashboard from "app/index";
import { ErrorBoundary } from "react-error-boundary";
import Logo from "components/Logo";

const App = () => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(initialUsers);
  const [events, setEvents] = useState(initialEvents);
  const [messages, setMessages] = useState(initialMessages);
  const [settings, setSettings] = useState(initialSettings);
  const [breakoutRooms, setBreakoutRooms] = useState([]);

  // useEffect(() => {
  //   if (!user) {
  //     history.push("/sign-in");
  //   }
  // }, [user]);

  return (
    <ErrorBoundary
      onReset={() => console.log("needed reset")}
      FallbackComponent={
        <div className="w-full h-full bg-white flex overflow-auto fixed left-0 top-0 z-50">
          <Logo className="m-auto"></Logo>
        </div>
      }
    >
      <NotificationsProvider>
        <div className="fixed left-0 top-0 w-full h-full">
          <ScreenSizeBadge></ScreenSizeBadge>
          <Suspense fallback={<Loader></Loader>}>
            <Switch>
              {user ? (
                <Dashboard
                  users={users}
                  userId={user ? user.id : -1}
                  logout={() => setUser(null)}
                  setUsers={setUsers}
                  events={events}
                  setEvents={setEvents}
                  messages={messages}
                  setMessages={setMessages}
                  settings={settings}
                  setSettings={setSettings}
                  breakoutRooms={breakoutRooms}
                  setBreakoutRooms={setBreakoutRooms}
                ></Dashboard>
              ) : null}
              <Route path="/forgot-password" exact>
                <ForgotPassword></ForgotPassword>
              </Route>
              <Route path="/sign-in" exact>
                <SignIn setUser={setUser} users={users}></SignIn>
              </Route>
              <Route path="/sign-up" exact>
                <SignUp setUsers={setUsers}></SignUp>
              </Route>
            </Switch>
          </Suspense>
        </div>
      </NotificationsProvider>
    </ErrorBoundary>
  );
};

export default App;
