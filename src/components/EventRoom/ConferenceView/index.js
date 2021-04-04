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

  return !isGridView ? (
    <NotGridView {...extendedProps}></NotGridView>
  ) : (
    <GridView {...extendedProps}></GridView>
  );
};

export default ConferenceView;

ConferenceView.propTypes = {
  participants: PropTypes.arrayOf(ParticipantPropType),
};
