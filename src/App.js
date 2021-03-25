import React, { Suspense, useEffect } from "react";
import "simplebar/dist/simplebar.min.css";
import { store, persistor } from "store";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Switch, Route, useHistory } from "react-router-dom";
import SignIn from "auth/SignIn";
import SignUp from "auth/SignUp";
const Dashboards = React.lazy(() => import("dashboards"));

const mapp = (state, ...ownProps) => {
  return { tempUser: state.tempUser, ...ownProps };
};

const App = connect(mapp)(({ tempUser }) => {
  const history = useHistory();

  useEffect(() => {
    if (!tempUser) {
      history.push("sign-in");
    }
  }, [tempUser]);

  return (
    <div className="fixed left-0 top-0 w-full h-full">
      <Suspense fallback="Loader">
        <Switch>
          <Route path="/" exact>
            <Dashboards></Dashboards>
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
