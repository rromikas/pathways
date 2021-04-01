import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NotGridView from "./NotGridView";
import GridView from "./GridView";
import ParticipantPropType from "propTypes/Participant";

const CallWindow = ({ participants, me, speaker }) => {
  const [isGridView, setIsGridView] = useState(false);

  return !isGridView ? (
    <NotGridView
      participants={participants}
      me={me}
      speaker={speaker}
      setIsGridView={setIsGridView}
    ></NotGridView>
  ) : (
    <GridView
      setIsGridView={setIsGridView}
      participants={participants}
      me={me}
      speaker={speaker}
    ></GridView>
  );
};

export default CallWindow;

CallWindow.propTypes = {
  participants: PropTypes.arrayOf(ParticipantPropType),
};
