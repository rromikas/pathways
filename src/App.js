import React, { Suspense, useEffect, useState } from "react";
import "simplebar/dist/simplebar.min.css";
import { store, persistor } from "store";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
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
const Dashboard = React.lazy(() => import("app/index.js"));

const App = () => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(initialUsers);
  const [events, setEvents] = useState(initialEvents);
  const [messages, setMessages] = useState(initialMessages);
  const [settings, setSettings] = useState(initialSettings);
  const [breakoutRooms, setBreakoutRooms] = useState([]);

  useEffect(() => {
    if (!user) {
      history.push("sign-in");
    }
  }, [user]);

  return (
    <NotificationsProvider>
      <div className="fixed left-0 top-0 w-full h-full">
        <ScreenSizeBadge></ScreenSizeBadge>
        <Suspense fallback={<Loader></Loader>}>
          <Switch>
            <Route path="/" exact>
              <Dashboard
                users={users}
                userId={user ? user.id : -1}
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
            </Route>
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
  );
};

const connectedApp = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App></App>
      </PersistGate>
    </Provider>
  );
};

export default connectedApp;
