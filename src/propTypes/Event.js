import PropTypes from "prop-types";

const EventPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  time: PropTypes.instanceOf(Date).isRequired,
  image: PropTypes.string.isRequired,
});

export default EventPropType;
