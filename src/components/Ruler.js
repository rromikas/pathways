import { withSize } from "react-sizeme";
import { useEffect } from "react";

const Ruler = withSize({ monitorHeight: true })(
  ({ size, setSize, height = false, width = false }) => {
    useEffect(() => {
      setSize(size);
    }, [size]);

    return <div className={`${width ? "w-full" : ""} ${height ? "h-full" : ""}`}></div>;
  }
);

export default Ruler;
