import { useEffect, useState } from "react";
import Person1 from "assets/person1.png";
import Person2 from "assets/person2.png";
import Person3 from "assets/person3.png";
import Person4 from "assets/person4.png";
import PropTypes from "prop-types";
import NotGridView from "./NotGridView";
import GridView from "./GridView";

const CallWindow = () => {
  const [isGridView, setIsGridView] = useState(false);
  const participants = [
    { photo: Person1 },
    { photo: Person4 },
    { photo: Person3 },
    { photo: Person1 },
    { photo: Person4 },
    { photo: Person4 },
    { photo: Person3 },
    { photo: Person1 },
    { photo: Person3 },
  ];

  const me = { photo: Person2 };

  return !isGridView ? (
    <NotGridView
      participants={participants}
      me={me}
      speaker={{ photo: Person1 }}
      setIsGridView={setIsGridView}
    ></NotGridView>
  ) : (
    <GridView
      setIsGridView={setIsGridView}
      participants={participants}
      me={me}
      speaker={{ photo: Person1 }}
    ></GridView>
  );
};

export default CallWindow;

CallWindow.propTypes = {
  participants: PropTypes.arrayOf(PropTypes.shape({ photo: PropTypes.string })),
};
