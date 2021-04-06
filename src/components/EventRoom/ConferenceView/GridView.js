import { useEffect, useState } from "react";
import { ReactComponent as MainViewIcon } from "assets/main_view.svg";
import { ReactComponent as ArrowLeft } from "assets/arrow_left.svg";
import { ReactComponent as ArrowRight } from "assets/arrow_right.svg";
import { withSize } from "react-sizeme";
import Ruler from "components/Ruler";
import ParticipantCard from "./ParticipantCard";
import PrepareScreen from "./PrepareScreen";

const GridView = ({
  participants,
  me,
  speaker,
  setIsGridView,
  size,
  secondsLeft,
  prepareTitle,
  prepareTitlePosition,
}) => {
  const [participantsFrame, setParticipantsFrame] = useState(0);
  const [photoHeight, setPhotoHeight] = useState(0);

  const responsiveOptions = [
    { colClass: "w-1/6", rowsCount: 3, itemsPerRow: 6 },
    { colClass: "w-1/5", rowsCount: 3, itemsPerRow: 5 },
    { colClass: "w-3/12", rowsCount: 3, itemsPerRow: 4 },
    { colClass: "w-4/12", rowsCount: 3, itemsPerRow: 3 },
    { colClass: "w-6/12", rowsCount: 2, itemsPerRow: 2 },
    { colClass: "w-full", rowsCount: 1, itemsPerRow: 1 },
  ];

  const getOption = () => {
    let option;
    if (size.width > 900) {
      option = 0;
    } else if (size.width > 700) {
      option = 1;
    } else if (size.width > 500) {
      option = 2;
    } else if (size.width > 400) {
      option = 3;
    } else if (size.width > 300) {
      option = 4;
    } else {
      option = 5;
    }
    return responsiveOptions[option];
  };

  const currentOption = getOption();
  const arraySize = currentOption.itemsPerRow * currentOption.rowsCount;

  const itemsArrForRender = participants.slice(
    participantsFrame * arraySize,
    participantsFrame * arraySize + arraySize
  );

  useEffect(() => {
    if (participantsFrame * arraySize > participants.length) {
      setParticipantsFrame(0);
    }
  }, [currentOption]);

  return (
    <div
      style={{ minHeight: photoHeight * currentOption.rowsCount + 16 }}
      className="row no-gutters p-8px bg-blue-400 rounded-xl overflow-hidden content-start relative"
    >
      <PrepareScreen
        secondsLeft={secondsLeft}
        title={prepareTitle}
        position={prepareTitlePosition}
      ></PrepareScreen>
      <MainViewIcon
        onClick={() => setIsGridView(false)}
        className="z-10 absolute top-6 right-6 text-white fill-current hover:text-orange-400 active:text-orange-500 cursor-pointer"
      ></MainViewIcon>
      {participantsFrame > 0 ? (
        <div className="cursor-pointer absolute left-0 top-0 z-10 h-full flex items-center px-1">
          <ArrowLeft onClick={() => setParticipantsFrame((prev) => prev - 1)}></ArrowLeft>
        </div>
      ) : null}
      {participantsFrame * arraySize + itemsArrForRender.length < participants.length ? (
        <div className="cursor-pointer absolute right-0 top-0 z-10 h-full flex items-center px-1">
          <ArrowRight onClick={() => setParticipantsFrame((prev) => prev + 1)}></ArrowRight>
        </div>
      ) : null}
      <Ruler setSize={(s) => setPhotoHeight(s.height)}></Ruler>
      {itemsArrForRender.map((x, i) => {
        return (
          <div className={`${currentOption.colClass} relative`} key={`participant-${i}`}>
            <ParticipantCard participant={x}></ParticipantCard>
          </div>
        );
      })}
    </div>
  );
};

export default withSize()(GridView);
