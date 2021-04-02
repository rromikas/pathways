import { useEffect, useRef, useState } from "react";
import moment from "moment";

const EventDuration = ({ event, endDate }) => {
  const startTime = moment(
    moment(event.date).format("YYYY-MM-DD") + " " + moment(event.time).format("hh:mm:ss")
  );

  const [endTime, setEndTime] = useState(moment(new Date()));
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!endDate) {
      timeoutRef.current = setTimeout(() => {
        setEndTime(moment(new Date()));
      }, 1000);
    } else {
      setEndTime(moment(endDate));
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [endTime]);

  const duration = moment.duration(endTime.diff(startTime));
  return moment.utc(duration.asMilliseconds()).format("hh:mm:ss");
};

export default EventDuration;
