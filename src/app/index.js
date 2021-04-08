import SideMenu from "components/SideMenu";
import { useState, useRef, Suspense, useCallback } from "react";
import MenuNavbar from "components/MenuNavbar";
import Drawer from "@material-ui/core/Drawer";
import { withSize } from "react-sizeme";
import Navbar from "components/DashboardNavbar";
import { participants } from "data";
import { useNotify } from "notifications";
import { Routes } from "./Routes";
import { Route, useHistory } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import Loader from "components/RelativeLoader";

const Dashboard = ({
  size,
  userId,
  logout,
  users,
  setUsers,
  events,
  setEvents,
  messages,
  setMessages,
  settings,
  setSettings,
  breakoutRooms,
  setBreakoutRooms,
}) => {
  const history = useHistory();
  const [menuOpened, setMenuOpened] = useState(false);
  const scrollContainer = useRef(null);
  const notify = useNotify();

  const user = userId > -1 ? users[userId] : null;

  const scrollToTop = useCallback(() => {
    if (scrollContainer.current) {
      try {
        scrollContainer.current.scrollTop = 0;
      } catch (er) {
        console.log("can't scroll to top", er);
      }
    }
  }, []);

  const sendMessage = (text) => {
    setMessages((prev) => [...prev, { user, text, createdAt: Date.now() }]);
  };

  const onCreateEvent = (ev) => {
    setEvents((prev) => [ev, ...prev]);
    history.push("/events");
  };

  const onSaveQuestionnaireAnswers = (answers) => {
    setUsers((prev) => {
      let usersObj = { ...prev };
      usersObj[userId].answers = answers;
      usersObj[userId].questionnaireFilled = !answers.filter((x) => !x).length ? true : false;
      return usersObj;
    });
  };

  const sendEventRequest = (evId) => {
    setUsers((prev) => {
      let usersObj = { ...prev };
      usersObj[userId].requestedEvents.push(evId);
      return usersObj;
    });
  };

  const acceptInvitation = (evId) => {
    setUsers((prev) => {
      let usersObj = { ...prev };
      usersObj[userId].letInEvents.push(evId);
      return usersObj;
    });
  };

  const selectSpeaker = (id) => {
    setUsers((prev) => {
      let usersObj = { ...prev };
      usersObj[userId].selectedSpeaker = id;
      return usersObj;
    });
  };

  const createBreakoutRooms = (speakers, numberOfRooms) => {
    const rooms = [];
    let ind;
    speakers.forEach((x, i) => {
      ind = i % numberOfRooms;
      if (ind < rooms.length) {
        rooms[ind].participants.push(x);
      } else {
        rooms.push({
          participants: [participants.find((p) => p.id === x)],
          title: "Breakout Room " + (i + 1),
          id: i + 1,
          moderator: null,
        });
      }
    });

    while (rooms.length < numberOfRooms) {
      const myIndex = ++ind;
      rooms.push({
        participants: [],
        title: "Breakout Room " + (myIndex + 1),
        id: myIndex + 1,
        moderator: null,
      });
    }

    setBreakoutRooms(rooms);
    notify(rooms.length + "  breakout rooms created");
  };

  const closeBreakoutRooms = () => {
    setBreakoutRooms([]);
    notify("Breakout groups closed");
  };

  const setModerator = (modId, roomId) => {
    setBreakoutRooms((prev) => {
      let arr = [...prev];
      const ind = arr.findIndex((x) => x.id === roomId);
      if (ind >= 0) {
        arr[ind].moderator = modId;
      }
      return arr;
    });
    notify("Moderator set");
  };

  const props = {
    user,
    events,
    scrollToTop,
    sendEventRequest,
    acceptInvitation,
    users,
    onCreateEvent,
    onSaveQuestionnaireAnswers,
    sendMessage,
    messages,
    settings,
    setSettings,
    selectSpeaker,
    createBreakoutRooms,
    breakoutRooms,
    closeBreakoutRooms,
    setModerator,
  };

  return (
    <>
      <Drawer anchor="left" open={menuOpened} onClose={() => setMenuOpened(false)}>
        <SideMenu
          onClose={() => setMenuOpened(false)}
          items={MenuItems.filter((x) => !x.hiddenFromMenu)}
          height={size.height}
        ></SideMenu>
      </Drawer>
      <div className="w-full h-full flex flex-col">
        <MenuNavbar openMenu={() => setMenuOpened(true)}></MenuNavbar>
        <div className="flex-grow flex" style={{ height: 0 }}>
          <div
            className="h-full hidden lg:block"
            style={{ boxShadow: "4px 0px 10px rgba(0,0,0,0.16)" }}
          >
            <SideMenu
              items={MenuItems.filter((x) => !x.hiddenFromMenu)}
              height={size.height}
            ></SideMenu>
          </div>
          <div
            ref={scrollContainer}
            className="h-full overflow-auto px-7 sm:px-12 pb-12 flex-grow flex flex-col"
          >
            <Navbar user={user} logout={logout}></Navbar>
            <div className="flex-grow">
              <Suspense fallback={<Loader></Loader>}>
                {Routes.map((x, i) => (
                  <Route
                    key={`route-${i}`}
                    exact
                    path={x.pathname}
                    render={(routeProps) => <x.component {...props} {...routeProps}></x.component>}
                  ></Route>
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withSize({ monitorHeight: true })(Dashboard);
