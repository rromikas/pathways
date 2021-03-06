import PropTypes from "prop-types";

const ParticipantPropType = PropTypes.shape({
  image: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
});

export default ParticipantPropType;
