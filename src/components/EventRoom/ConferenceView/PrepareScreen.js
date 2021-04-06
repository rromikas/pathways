import moment from "moment";

const PrepareScreen = ({ secondsLeft, title, position = "top" }) => {
  return secondsLeft <= 60 && secondsLeft >= -3 ? (
    <div className="absolute left-0 top-0 w-full h-full rounded-lg bg-gray z-50 flex p-7 bg-gray-700 text-white overflow-auto">
      {secondsLeft <= 0 ? (
        <div className="m-auto">Breakout session started!</div>
      ) : (
        <div className="m-auto">
          {position === "top" ? <div className="text-center mb-4 text-18px">{title}</div> : null}
          <div className="text-center">
            Breakout session starting in{" "}
            <span className="font-bold text-48px">
              {moment.utc(secondsLeft * 1000).format("ss")}
            </span>
          </div>
          {position === "bottom" ? <div className="text-center mt-4 text-18px">{title}</div> : null}
        </div>
      )}
    </div>
  ) : null;
};

export default PrepareScreen;
