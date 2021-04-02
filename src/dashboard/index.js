import SideMenu from "components/SideMenu";
import { useState, useRef } from "react";
import MenuNavbar from "components/MenuNavbar";
import Drawer from "@material-ui/core/Drawer";
import { withSize } from "react-sizeme";
import { connect } from "react-redux";
import Navbar from "components/DashboardNavbar";
import { getPages } from "./Pages";
import { users as initialUsers } from "data";
import SimpleBar from "simplebar-react";

const Dashboard = ({ size, userId, users, setUsers, events, setEvents }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [eventId, setEventId] = useState(1);
  const scrollContainer = useRef(null);

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

  const goToEventPage = (evId) => {
    setEventId(evId);
    setPageIndex(pages.findIndex((x) => x.title === "Event"));
  };

  const goToEventRoom = (evId) => {
    setEventId(evId);
    setPageIndex(pages.findIndex((x) => x.title === "Event Room"));
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
  };
  const pageSpecificProps = pages[pageIndex].props.reduce(
    (a, b) => Object.assign({}, a, { [b]: props[b] }),
    {}
  );

  return (
    <>
      <Drawer anchor="left" open={menuOpened} onClose={() => setMenuOpened(false)}>
        <SideMenu
          page={pageIndex}
          setPage={(index) => {
            setPageIndex(index);
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
              page={pageIndex}
              setPage={setPageIndex}
              items={pages.filter((x) => !x.hiddenFromMenu)}
              height={size.height}
            ></SideMenu>
          </div>
          <div className="flex-grow flex flex-col">
            <Navbar
              goToCreateEventPage={() =>
                setPageIndex(pages.findIndex((x) => x.title === "Create Event"))
              }
              user={user}
            ></Navbar>
            <div ref={scrollContainer} className="flex-grow h-0 px-12 pb-12 overflow-auto">
              <PageComponent {...pageSpecificProps} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withSize({ monitorHeight: true })(Dashboard);
