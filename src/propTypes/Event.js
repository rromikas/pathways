import PropTypes from "prop-types";

const EventPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dateTime: PropTypes.instanceOf(Date).isRequired,
  image: PropTypes.string.isRequired,
});

export default EventPropType;
