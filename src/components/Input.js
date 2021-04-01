const Input = ({ className = "", ...rest }) => {
  return (
    <input
      {...rest}
      spellCheck={false}
      className={
        className +
        " bg-gray-400 hover:bg-gray-401 focus:bg-blue-100 transition outline-none border-none h-48px px-5 rounded-xl placeholder-black"
      }
    ></input>
  );
};

export default Input;
