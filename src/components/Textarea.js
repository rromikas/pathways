const Textarea = ({ className = "", ...rest }) => {
  return (
    <textarea
      {...rest}
      spellCheck={false}
      className={
        className +
        " resize-none rounded-xl bg-gray-400 hover:bg-gray-401 transition outline-none p-7"
      }
    ></textarea>
  );
};

export default Textarea;
