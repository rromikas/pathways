import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NotGridView from "./NotGridView";
import GridView from "./GridView";
import ParticipantPropType from "propTypes/Participant";
import useTime from "hooks/useTime";

const ConferenceView = ({
  participants,
  me,
  speaker,
  event,
  prepareTitle,
  prepareTitlePosition,
}) => {
  const [isGridView, setIsGridView] = useState(false);
  const { time, stopTimer } = useTime();
  const props = {
    prepareTitle,
    prepareTitlePosition,
    time,
    event,
    participants,
    me,
    speaker,
    setIsGridView,
    stopTimer,
  };

  return !isGridView ? <NotGridView {...props}></NotGridView> : <GridView {...props}></GridView>;
};

export default ConferenceView;

ConferenceView.propTypes = {
  participants: PropTypes.arrayOf(ParticipantPropType),
};
