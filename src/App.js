import React, { useEffect, useState } from "react";
import "simplebar/dist/simplebar.min.css";
import { Switch, Route, useHistory } from "react-router-dom";
import SignIn from "auth/SignIn";
import SignUp from "auth/SignUp";
import ForgotPassword from "auth/ForgotPassword";
import {
  users as initialUsers,
  events as initialEvents,
  messages as initialMessages,
  settings as initialSettings,
} from "data";
import NotificationsProvider from "notifications";
import Dashboard from "app/index";

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
      history.push("/sign-in");
    }
  }, [user, history]);

  return (
    <NotificationsProvider>
      <div className="fixed left-0 top-0 w-full h-full">
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
            <SignUp setUser={() => setUser(users[5])}></SignUp>
          </Route>
        </Switch>
      </div>
    </NotificationsProvider>
  );
};

export default App;
