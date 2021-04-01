import { useState } from "react";

const AuthInput = ({ icon, className = "", ...rest }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={
        className +
        " h-48px w-full rounded border-gray-300 transition border-gray-500 border p-2 flex  " +
        (focused ? "bg-blue-100" : "bg-gray-400")
      }
    >
      <div className="flex-shrink-0 w-36px pr-2 flex justify-center items-center border-r border-gray-500 mr-3">
        {icon}
      </div>
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="bg-transparent w-full border-none outline-none placeholder-gray-600"
        {...rest}
      ></input>
    </div>
  );
};

export default AuthInput;
