import { useEffect, useRef, useState } from "react";
import moment from "moment";

const EventDuration = ({ event, endDate }) => {
  const startTime = moment(
    moment(event.date).format("YYYY-MM-DD") + " " + moment(event.time).format("HH:mm:ss")
  );

  const [endTime, setEndTime] = useState(moment(new Date()));
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!endDate) {
      timeoutRef.current = setTimeout(() => {
        setEndTime(moment());
      }, 1000);
    } else {
      setEndTime(moment(endDate));
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [endTime]); // eslint-disable-line react-hooks/exhaustive-deps

  const duration = moment.duration(endTime.diff(startTime));
  return endTime.toDate() < startTime.toDate()
    ? "Event not started"
    : moment.utc(duration.asMilliseconds()).format("HH:mm:ss");
};

export default EventDuration;
