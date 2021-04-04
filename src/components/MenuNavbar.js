import Logo from "components/Logo";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = ({ openMenu }) => {
  return (
    <div
      className="w-full lg:hidden flex justify-between p-7 self-start"
      style={{ boxShadow: "0px 4px 10px rgba(0,0,0,0.16)" }}
    >
      <div className="w-80px">
        <Logo></Logo>
      </div>

      <div style={{ height: 60, width: 60 }} className="flex items-center justify-center">
        <MenuIcon onClick={openMenu} className="text-4xl cursor-pointer"></MenuIcon>
      </div>
    </div>
  );
};

export default Navbar;
