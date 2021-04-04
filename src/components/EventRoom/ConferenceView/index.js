import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NotGridView from "./NotGridView";
import GridView from "./GridView";
import ParticipantPropType from "propTypes/Participant";
import useTime from "hooks/useTime";

const ConferenceView = (props) => {
  const [isGridView, setIsGridView] = useState(false);
  const { time, stopTimer } = useTime();
  const extendedProps = {
    ...props,
    time,
    setIsGridView,
    stopTimer,
  };

  return (
    <div className="mr-2">
      {!isGridView ? (
        <NotGridView {...extendedProps}></NotGridView>
      ) : (
        <GridView {...extendedProps}></GridView>
      )}
    </div>
  );
};

export default ConferenceView;

ConferenceView.propTypes = {
  participants: PropTypes.arrayOf(ParticipantPropType),
};
