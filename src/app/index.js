import SideMenu from "components/SideMenu";
import { useState, useRef } from "react";
import MenuNavbar from "components/MenuNavbar";
import Drawer from "@material-ui/core/Drawer";
import { withSize } from "react-sizeme";
import Navbar from "components/DashboardNavbar";
import { getPages } from "./Pages";
import { participants } from "data";
import { useNotify } from "notifications";

const Dashboard = ({
  size,
  userId,
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
  const [pageIndex, setPageIndex] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [eventId, setEventId] = useState(1);
  const scrollContainer = useRef(null);
  const notify = useNotify();

  const user = userId > -1 ? users[userId] : null;
  const pages = getPages(user);
  const PageComponent = pages[pageIndex].component;
  const event = eventId > -1 ? events.find((x) => x.id === eventId) : null;

  const scrollToTop = () => {
    if (scrollContainer.current) {
      try {
        // scrollContainer.current.getScrollElement().scrollTop = 0;
        scrollContainer.current.scrollTop = 0;
      } catch (er) {
        console.log("can't scroll to top", er);
      }
    }
  };

  const setPageIndexByTitle = (title) => {
    return setPageIndex(pages.findIndex((x) => x.title === title));
  };

  const goToEventPage = (evId) => {
    setEventId(evId);
    setPageIndexByTitle("Event");
  };

  const goToEventRoom = (evId) => {
    setEventId(evId);
    setPageIndexByTitle("Event Room");
  };

  const goToAnalyticsPage = (ev) => {
    setPageIndexByTitle("Analytics");
  };

  const sendMessage = (text) => {
    setMessages((prev) => [...prev, { user, text, createdAt: Date.now() }]);
  };

  const onCreateEvent = (ev) => {
    setEvents((prev) => [ev, ...prev]);
    setPageIndex(pages.findIndex((x) => x.title === "Events"));
    scrollToTop();
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
    event,
    goToEventPage,
    goToEventRoom,
    sendEventRequest,
    acceptInvitation,
    users,
    onCreateEvent,
    onSaveQuestionnaireAnswers,
    goToAnalyticsPage,
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
  const pageSpecificProps = pages[pageIndex].props.reduce(
    (a, b) => Object.assign({}, a, { [b]: props[b] }),
    {}
  );

  return (
    <>
      <Drawer anchor="left" open={menuOpened} onClose={() => setMenuOpened(false)}>
        <SideMenu
          page={pages[pageIndex].title}
          setPage={(title) => {
            setPageIndexByTitle(title);
            setMenuOpened(false);
          }}
          items={pages.filter((x) => !x.hiddenFromMenu)}
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
              page={pages[pageIndex].title}
              setPage={setPageIndexByTitle}
              items={pages.filter((x) => !x.hiddenFromMenu)}
              height={size.height}
            ></SideMenu>
          </div>
          <div ref={scrollContainer} className="h-full overflow-auto px-7 sm:px-12 pb-12 flex-grow">
            <Navbar
              page={pages[pageIndex]}
              goToCreateEventPage={() =>
                setPageIndex(pages.findIndex((x) => x.title === "Create Event"))
              }
              user={user}
            ></Navbar>
            <PageComponent {...pageSpecificProps} />
          </div>
        </div>
      </div>
    </>
  );
};

export default withSize({ monitorHeight: true })(Dashboard);
