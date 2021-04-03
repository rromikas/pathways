import moment from "moment";

const PrepareScreen = ({ time, stopTimer, event, title, position = "top" }) => {
  const startTime = moment(
    moment(event.date).format("YYYY-MM-DD") + " " + moment(event.time).format("hh:mm:ss")
  );

  const nowTime = moment(time);

  const duration = moment.duration(startTime.diff(nowTime));
  const secondsLeft = duration.asSeconds();
  if (secondsLeft < -3) {
    stopTimer();
  }

  return secondsLeft <= 60 && secondsLeft >= -3 ? (
    <div className="absolute left-0 top-0 w-full h-full bg-gray z-50 flex p-7 bg-gray-700 text-white overflow-auto">
      {secondsLeft <= 0 ? (
        <div className="m-auto">Breakout session started!</div>
      ) : (
        <div className="m-auto">
          {position === "top" ? <div className="text-center mb-4 text-18px">{title}</div> : null}
          <div className="text-center">
            Breakout session starting in{" "}
            <span className="font-bold text-48px">
              {moment.utc(duration.asMilliseconds()).format("ss")}
            </span>
          </div>
          {position === "bottom" ? <div className="text-center mt-4 text-18px">{title}</div> : null}
        </div>
      )}
    </div>
  ) : null;
};

export default PrepareScreen;
