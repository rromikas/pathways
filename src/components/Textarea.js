const Textarea = ({ className = "", ...rest }) => {
  return (
    <textarea
      {...rest}
      spellCheck={false}
      className={
        "resize-none rounded-xl placeholder-black bg-gray-400 hover:bg-gray-401 focus:bg-blue-100 transition outline-none px-6 py-4 h-96px " +
        className
      }
    ></textarea>
  );
};

export default Textarea;
