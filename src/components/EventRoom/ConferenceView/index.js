import { useState } from "react";
import PropTypes from "prop-types";
import NotGridView from "./NotGridView";
import GridView from "./GridView";
import ParticipantPropType from "propTypes/Participant";

const ConferenceView = (props) => {
  const [isGridView, setIsGridView] = useState(false);

  const extendedProps = {
    ...props,
    setIsGridView,
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
