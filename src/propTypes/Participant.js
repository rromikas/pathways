import PropTypes from "prop-types";

const ParticipantPropType = PropTypes.shape({
  photo: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
});

export default ParticipantPropType;
