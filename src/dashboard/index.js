import SideMenu from "components/SideMenu";
import { useState, useRef } from "react";
import MenuNavbar from "components/MenuNavbar";
import Drawer from "@material-ui/core/Drawer";
import { withSize } from "react-sizeme";
import { connect } from "react-redux";
import Navbar from "components/DashboardNavbar";
import { getPages } from "./Pages";
import { users } from "data";
import SimpleBar from "simplebar-react";

const Dashboard = ({ size, user }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const scrollContainer = useRef(null);
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

  const pages = getPages(user);
  const PageComponent = pages[pageIndex].component;

  return (
    <>
      <Drawer anchor="left" open={menuOpened} onClose={() => setMenuOpened(false)}>
        <SideMenu
          page={pageIndex}
          setPage={(index) => {
            setPageIndex(index);
            setMenuOpened(false);
          }}
          items={pages}
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
              items={pages}
              height={size.height}
            ></SideMenu>
          </div>
          <div className="flex-grow flex flex-col">
            <Navbar></Navbar>
            <div ref={scrollContainer} className="flex-grow h-0 px-12 pb-12 overflow-auto">
              <PageComponent user={user} scrollToTop={scrollToTop} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapp = (state, ...ownProps) => {
  return { user: state.user, ...ownProps };
};

export default withSize({ monitorHeight: true })(connect(mapp)(Dashboard));
