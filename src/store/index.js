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

function usersReducer(state = {}, action) {
  switch (action.type) {
    case "SET_USERS":
      return action.payload;
    case "CREATE_USER":
      return { ...state, [action.payload.id]: action.payload };
    case "UPDATE_USER":
      return { ...state, [action.payload.id]: { ...state[action.payload.id], ...action.payload } };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  tempUser: tempuserReducer,
  users: usersReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "users"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
