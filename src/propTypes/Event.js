import PropTypes from "prop-types";

const EventPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dateTime: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
});

export default EventPropType;
