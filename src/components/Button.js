import ButtonBase from "@material-ui/core/ButtonBase";

const Button = ({ className, primary = false, ...rest }) => {
  return (
    <ButtonBase
      {...rest}
      className={`outline-none transition text-white h-48px w-256px rounded-md ${
        primary ? "bg-orange-400 hover:bg-orange-500" : "bg-blue-400 hover:bg-blue-300"
      } ${className}`}
    ></ButtonBase>
  );
};

export default Button;
