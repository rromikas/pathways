import Logo from "components/Logo";
import ButtonBase from "@material-ui/core/ButtonBase";
import SimpleBar from "simplebar-react";
import BooksImage from "assets/books.svg";
import { useHistory, useLocation } from "react-router-dom";

const SideMenu = ({ items, height, onClose = () => {} }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <SimpleBar className="h-full" style={{ width: 330 }}>
      <div className="flex flex-col" style={{ minHeight: height }}>
        <div className="pb-12 pt-9 pl-10 pr-12 flex flex-col text-lg">
          <Logo
            className="mb-16"
            onClick={() => {
              history.push("/");
              onClose();
            }}
          ></Logo>
          <div>
            {items.map((x, i) => (
              <ButtonBase
                key={`sideMenu-item-${i}`}
                className={`w-full flex justify-start items-center mb-5 outline-none rounded-xl transition-colors duration-200 ease-in-out cursor-pointer px-4 py-5 ${
                  location.pathname === x.pathname
                    ? "bg-blue-400 text-white"
                    : "text-blue-400 hover:bg-blue-100"
                }`}
                onClick={() => {
                  history.push(x.pathname);
                  onClose();
                }}
              >
                <x.icon
                  className={`mr-7 text-3xl ${
                    location.pathname === x.pathname ? "text-white" : ""
                  } fill-current`}
                  fontSize="inherit"
                ></x.icon>
                <div className="leading-none">{x.title}</div>
              </ButtonBase>
            ))}
          </div>
        </div>
        <div className="flex-grow flex items-end px-6">
          <img alt="books" src={BooksImage} className="pb-10 w-full"></img>
        </div>
      </div>
    </SimpleBar>
  );
};

export default SideMenu;
