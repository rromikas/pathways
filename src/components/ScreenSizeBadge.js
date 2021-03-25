import { useEffect, useState } from "react";
import Ruler from "components/Ruler";

const ScreenSizeBadge = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <div>
      <div className="fixed top-0 right-0 bg-black text-white z-10 px-1 py-0.5 text-12px">
        {width} x {height}px
      </div>
      <div className="fixed left-0 top-0 w-full h-full -z-10">
        <Ruler
          width
          height
          setSize={({ width, height }) => {
            setWidth(width);
            setHeight(height);
          }}
        ></Ruler>
      </div>
    </div>
  );
};

export default ScreenSizeBadge;
