import { useEffect, useState } from "react";
import { ReactComponent as GridIcon } from "assets/grid.svg";
import { ReactComponent as ArrowLeft } from "assets/arrow_left.svg";
import { ReactComponent as ArrowRight } from "assets/arrow_right.svg";
import BlueFill from "assets/blue_fill.png";
import { withSize } from "react-sizeme";
import ParticipantCard from "./ParticipantCard";
import FocusedParticipantCard from "./FocusedParticipantCard";
import ActionsBar from "./ActionsBar";

const BoxRuler = withSize()(({ size, setSize }) => {
  useEffect(() => {
    setSize(size);
  }, [size]);

  return <div className="h-0 w-full"></div>;
});

const NotGridView = ({ participants, me, speaker, setIsGridView }) => {
  const [isGridMode, setIsGridMode] = useState(false);
  const [participantsBoxWidth, setParticipantsBoxWidth] = useState(0);
  const [participantsFrame, setParticipantsFrame] = useState(0);

  useEffect(() => {
    let participantsPerFrame = Math.floor(participantsBoxWidth / 150);
    participantsPerFrame =
      participantsPerFrame > 0 ? participantsPerFrame - 1 : participantsPerFrame;
    if (participantsPerFrame * participantsFrame >= participants.length) {
      setParticipantsFrame(0);
    }
  }, [participantsBoxWidth]);

  let participantsPerFrame = Math.floor(participantsBoxWidth / 150);
  participantsPerFrame = participantsPerFrame > 0 ? participantsPerFrame - 1 : participantsPerFrame;

  const participantsInCurrentFrame = participants.slice(
    participantsFrame * participantsPerFrame,
    participantsFrame * participantsPerFrame + participantsPerFrame
  );
  const framesCount = Math.ceil(participants.length / participantsPerFrame);
  const fillsCount =
    participantsFrame === framesCount - 1
      ? participantsPerFrame - participantsInCurrentFrame.length
      : 0;

  const participantsArrForRender = [
    ...participantsInCurrentFrame,
    ...new Array(fillsCount).fill(0).map((x) => ({ photo: BlueFill, filler: true })),
  ];
  return (
    <div
      style={{ maxWidth: 800 }}
      className="flex flex-col bg-blue-400 rounded-xl overflow-hidden relative"
    >
      <div className="flex-grow flex justify-center items-center pt-6 px-6">
        <GridIcon
          onClick={() => setIsGridView(true)}
          className="absolute top-6 right-6 text-white fill-current hover:text-orange-400 active:text-orange-500 cursor-pointer"
        ></GridIcon>
        <FocusedParticipantCard participant={speaker}></FocusedParticipantCard>
      </div>
      <div className="row no-gutters p-3">
        <BoxRuler
          setSize={(size) => {
            setParticipantsBoxWidth(size.width);
          }}
        ></BoxRuler>
        <div style={{ width: participantsBoxWidth / (participantsPerFrame + 1) }}>
          <ParticipantCard participant={me} me></ParticipantCard>
        </div>
        <div className="col row no-gutters h-full items-center justify-center">
          {participantsArrForRender.map((x, i) => {
            return (
              <div className="col relative" key={`participant-${i}`}>
                {i === 0 && participantsFrame > 0 ? (
                  <div
                    onClick={() => setParticipantsFrame((prev) => prev - 1)}
                    className="cursor-pointer absolute h-full left-0 top-0 w-11 z-10 flex justify-center items-center"
                  >
                    <ArrowLeft></ArrowLeft>
                  </div>
                ) : null}
                {i === participantsArrForRender.length - 1 &&
                participantsFrame < framesCount - 1 ? (
                  <div
                    onClick={() => setParticipantsFrame((prev) => prev + 1)}
                    className="cursor-pointer absolute h-full right-0 top-0 w-11 z-10 flex justify-center items-center"
                  >
                    <ArrowRight></ArrowRight>
                  </div>
                ) : (
                  ""
                )}
                <ParticipantCard participant={x}></ParticipantCard>
              </div>
            );
          })}
        </div>
      </div>
      <ActionsBar></ActionsBar>
    </div>
  );
};

export default NotGridView;
