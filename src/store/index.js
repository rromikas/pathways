import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

function userReducer(state = null, action) {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    default:
      return state;
  }
}

function tempuserReducer(state = null, action) {
  switch (action.type) {
    case "SET_TEMPORARY_USER":
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  tempUser: tempuserReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
