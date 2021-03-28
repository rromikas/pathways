import ButtonBase from "@material-ui/core/ButtonBase";

const Button = ({ className, primary = false, outlined = false, floating = false, ...rest }) => {
  return (
    <ButtonBase
      {...rest}
      className={`outline-none px-3 transition h-48px whitespace-nowrap rounded-md ${
        outlined
          ? "border border-solid border-blue-400 hover:text-white hover:bg-blue-400"
          : floating
          ? "shadow-custom"
          : primary
          ? "bg-orange-400 hover:bg-orange-500 text-white"
          : "bg-blue-400 hover:bg-blue-300 text-white"
      } ${className}`}
    ></ButtonBase>
  );
};

export default Button;
