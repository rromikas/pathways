import LogoSVG from "assets/logo.svg";

const Logo = ({ onClick, className = "" }) => {
  return (
    <a href="/">
      <img
        alt="logo"
        className={`${className} cursor-pointer`}
        onClick={onClick}
        src={LogoSVG}
        width={140}
      ></img>
    </a>
  );
};

export default Logo;
