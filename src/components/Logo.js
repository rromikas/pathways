import LogoSVG from "assets/logo.svg";

const Logo = ({ onClick, className = "" }) => {
  return <img alt="logo" className={className} onClick={onClick} src={LogoSVG} width={140}></img>;
};

export default Logo;
