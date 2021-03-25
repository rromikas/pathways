import React, { Suspense, useEffect } from "react";
import "simplebar/dist/simplebar.min.css";
import { store, persistor } from "store";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Switch, Route, useHistory } from "react-router-dom";
import SignIn from "auth/SignIn";
import SignUp from "auth/SignUp";
import ForgotPassword from "auth/ForgotPassword";
import ScreenSizeBadge from "components/ScreenSizeBadge";
import { users } from "data";
const Dashboards = React.lazy(() => import("dashboards"));

const mapp = (state, ...ownProps) => {
  return { user: state.user, ...ownProps };
};

const App = connect(mapp)(({ user }) => {
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("sign-in");
    }
  }, [user]);

  useEffect(() => {
    store.dispatch({ type: "SET_USERS", payload: users });
  }, []);

  return (
    <div className="fixed left-0 top-0 w-full h-full">
      <ScreenSizeBadge></ScreenSizeBadge>
      <Suspense fallback="Loader">
        <Switch>
          <Route path="/" exact>
            <Dashboards></Dashboards>
          </Route>
          <Route path="/forgot-password" exact>
            <ForgotPassword></ForgotPassword>
          </Route>
          <Route path="/sign-in" exact>
            <SignIn></SignIn>
          </Route>
          <Route path="/sign-up" exact>
            <SignUp></SignUp>
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
});

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
