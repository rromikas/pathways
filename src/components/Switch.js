const Switch = ({ enabled, setEnabled }) => {
  return (
    <div
      onClick={() => setEnabled(!enabled)}
      className={`rounded-full w-72px cursor-pointer h-32px flex items-center relative transition outline-none ${
        !enabled ? "bg-gray-300 hover:bg-gray-301" : "bg-orange-400 hover:bg-orange-500"
      }`}
    >
      <div
        className={`w-28px h-28px rounded-full bg-white absolute transition-all`}
        style={{ left: enabled ? 42 : 2 }}
      ></div>
    </div>
  );
};

export default Switch;
