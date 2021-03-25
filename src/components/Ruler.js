import { withSize } from "react-sizeme";
import { useEffect } from "react";

const Ruler = ({ size, setSize, height = false, width = false }) => {
  useEffect(() => {
    setSize(size);
  }, [size, setSize]);

  return <div className={`${width ? "w-full" : ""} ${height ? "h-full" : ""}`}></div>;
};

export default withSize({ monitorHeight: true })(Ruler);
