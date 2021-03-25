const AuthInput = ({ icon, className = "", ...rest }) => {
  return (
    <div
      className={
        className +
        " h-48px w-full rounded border-gray-300 bg-gray-400 border-gray-500 border p-2 flex"
      }
    >
      <div className="flex-shrink-0 w-36px pr-2 flex justify-center items-center border-r border-gray-500 mr-3">
        {icon}
      </div>
      <input
        className="bg-transparent w-full border-none outline-none placeholder-gray-600"
        {...rest}
      ></input>
    </div>
  );
};

export default AuthInput;
