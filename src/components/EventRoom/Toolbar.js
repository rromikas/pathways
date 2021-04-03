import ButtonBase from "@material-ui/core/ButtonBase";

const views = ["Conference", "Chat"];

const Toolbar = ({ activeView, setActiveView }) => {
  return (
    <div className="flex">
      {views.map((x, i) => (
        <ButtonBase
          onClick={() => setActiveView(x)}
          key={`toolbar-btn-${i}`}
          className={`${
            activeView === x ? "bg-blue-400 text-white" : "bg-white text-black hover:bg-blue-100"
          } h-48px rounded-lg px-4 xl:hidden flex items-center my-2 outline-none transition mr-2`}
        >
          {x}
        </ButtonBase>
      ))}
    </div>
  );
};

export default Toolbar;
