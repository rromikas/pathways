import Button from "components/Button";
import { ReactComponent as TurnOffIcon } from "assets/turn_off.svg";
import { ReactComponent as BreakoutSessionIcon } from "assets/breakout_session.svg";
import { ReactComponent as SendIcon } from "assets/send.svg";
import EventDuration from "components/EventDuration";
import ButtonBase from "@material-ui/core/ButtonBase";
import QRCode from "components/QRCode";
import { useState } from "react";
import ShareButton from "components/ShareButton";
import SelectModal from "components/SelectModal";
import ViewProfile from "components/ViewProfile";
import { Tooltip } from "react-tippy";
import CloseIcon from "@material-ui/icons/Close";
import NumberInput from "components/NumberInput";
import Collapse from "@material-ui/core/Collapse";
import Simplebar from "simplebar-react";
import ArrowDown from "@material-ui/icons/KeyboardArrowDown";
import { TrainRounded } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const BreakoutSessionButtonWithTooltip = ({ participants, onSubmit }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [assignSpeakersOpen, setAssignSpeakersOpen] = useState(false);
  const [numberOfRooms, setNumberOfRooms] = useState(0);
  const [speakers, setSpeakers] = useState([]);

  return (
    <>
      <SelectModal
        title="Select Speaker/School Representative"
        open={assignSpeakersOpen}
        multiple
        value={speakers}
        onClose={() => {
          setAssignSpeakersOpen(false);
        }}
        onSubmit={() => {
          setAssignSpeakersOpen(false);
          onSubmit(speakers, numberOfRooms);
        }}
        setValue={setSpeakers}
        items={participants
          .filter((x) => x.role === "speaker")
          .map((x, i) => ({
            value: x.id,
            title: x.fullName,
            action: {
              title: "View profile",
              fn: async () => {
                setAssignSpeakersOpen(false);
                await ViewProfile({ user: x, zIndex: 100000 });
                setAssignSpeakersOpen(true);
              },
            },
          }))}
      ></SelectModal>
      <Tooltip
        open={tooltipOpen}
        html={
          <div className="bg-white overflow-hidden rounded-lg shadow-custom">
            <div className="py-3 bg-blue-400 text-center px-12 text-white relative">
              Breakout session
              <div
                onClick={() => {
                  setTooltipOpen(false);
                }}
                className="absolute right-5 top-0 bottom-0 my-auto h-32px w-32px bg-blue-300 hover:bg-blue-400 rounded-full cursor-pointer transition flex justify-center items-center"
              >
                <CloseIcon></CloseIcon>
              </div>
            </div>
            <div className="p-12">
              <div className="flex items-center mb-12">
                <div className="mr-4">Total students {participants.length}, assign rooms</div>
                <NumberInput value={numberOfRooms} setValue={setNumberOfRooms}></NumberInput>
              </div>
              <div className="flex justify-center">
                <Button
                  className="px-7"
                  primary
                  onClick={() => {
                    setTooltipOpen(false);
                    setAssignSpeakersOpen(true);
                  }}
                >
                  Assign Speakers/Representatives
                </Button>
              </div>
            </div>
          </div>
        }
      >
        <Button
          secondary
          className="sm:w-372px w-300px mr-5 mb-3"
          onClick={() => setTooltipOpen((prev) => !prev)}
        >
          <div className="flex items-center">
            <BreakoutSessionIcon className="mr-3 w-24px"></BreakoutSessionIcon>
            <div className="leading-none">Start breakout session</div>
          </div>
        </Button>
      </Tooltip>
    </>
  );
};

const BreakoutRoomsButtonWithTooltip = ({
  breakoutRooms,
  setBreakoutRoomId,
  breakoutRoomId,
  closeBreakoutRooms,
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [showRoomIndex, setShowRoomIndex] = useState(-1);
  return (
    <Tooltip
      open={tooltipOpen}
      html={
        <div className="bg-white overflow-hidden rounded-lg shadow-custom h-450px w-330px sm:w-372px flex flex-col">
          <div className="py-3 bg-blue-400 text-center px-12 text-white relative">
            Breakout rooms
            <div
              onClick={() => setTooltipOpen(false)}
              className="absolute right-5 top-0 bottom-0 my-auto h-32px w-32px bg-blue-300 hover:bg-blue-400 rounded-full cursor-pointer transition flex justify-center items-center"
            >
              <CloseIcon></CloseIcon>
            </div>
          </div>
          <div className="flex-grow h-0">
            <Simplebar className="h-full p-7">
              {breakoutRooms.map((x, i) => (
                <div key={`br-room-${i}`} className="mb-1">
                  <div className="flex justify-between mb-3 flex-wrap">
                    <div
                      className="flex whitespace-nowrap cursor-pointer items-center mr-3"
                      onClick={() => setShowRoomIndex((prev) => (prev === i ? -1 : i))}
                    >
                      <div className="mr-3">{x.title}</div>
                      <ArrowDown
                        className={`text-gray-600 fill-current transform transition-transform duration-150 ${
                          showRoomIndex === i ? "rotate-180" : ""
                        }`}
                      ></ArrowDown>
                    </div>
                    <ButtonBase
                      onClick={() => setBreakoutRoomId(x.id)}
                      className="text-orange-400 transition hover:bg-blue-400 hover:text-white h-28px border border-solid tr border-blue-400 outline-none rounded w-112px text-center"
                    >
                      {x.id === breakoutRoomId ? "Joined" : "Join"}
                    </ButtonBase>
                  </div>
                  <Collapse in={showRoomIndex === i}>
                    <div>
                      {x.participants.map((p, ind) => {
                        return (
                          <div
                            key={`room-${i}-participant-${ind}`}
                            className="flex items-center mb-3"
                          >
                            <div
                              className="bg-center bg-cover w-40px h-40px rounded-full mr-3"
                              style={{ backgroundImage: `url(${p.image})` }}
                            ></div>
                            <div>{p.fullName}</div>
                          </div>
                        );
                      })}
                    </div>
                  </Collapse>
                </div>
              ))}
            </Simplebar>
          </div>
          <div className="py-4 flex justify-center">
            <Button onClick={closeBreakoutRooms} className="px-7" primary>
              Close Breakout Groups
            </Button>
          </div>
        </div>
      }
    >
      <Button
        secondary
        className="sm:w-372px w-300px mr-5 mb-3"
        onClick={() => setTooltipOpen((prev) => !prev)}
      >
        Breakout rooms
      </Button>
    </Tooltip>
  );
};

const Cell = ({ title, value, actionTitle = "", actionFn = () => {} }) => {
  return (
    <div className="flex items-center mb-7 mr-7">
      <div className="flex flex-wrap sm:flex-nowrap items-center">
        <div className="w-224px">{title}:</div>
        <div className="w-96px">{value}</div>
      </div>
      <div className="text-orange-400 cursor-pointer select-none" onClick={actionFn}>
        {actionTitle}
      </div>
    </div>
  );
};

const SendMessageWidget = ({ value, setValue, onSubmit }) => {
  const finalSubmit = () => {
    if (value) {
      onSubmit(value);
      setValue("");
    }
  };
  return (
    <div className="h-56px rounded-lg border border-blue-400 flex items-center px-6">
      <input
        value={value}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            finalSubmit();
          }
        }}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Say something to people"
        type="text"
        spellCheck={false}
        className="outline-none text-blue-400 border-none bg-transparent placeholder-blue-400 h-full flex-grow pr-3 overflow-ellipsis"
      ></input>
      <SendIcon className="cursor-pointer" onClick={finalSubmit}></SendIcon>
    </div>
  );
};

const AdminBottom = ({
  setShowParticipants,
  participants,
  event,
  sendMessage,
  createBreakoutRooms,
  breakoutRooms,
  setBreakoutRoomId,
  breakoutRoomId,
  closeBreakoutRooms,
}) => {
  const [message, setMessage] = useState("");
  const history = useHistory();
  return (
    <div>
      <div className="flex py-7 border-b border-gray-700 mb-7">
        <div className="flex flex-grow flex-wrap items-center justify-between">
          {breakoutRooms.length ? (
            <BreakoutRoomsButtonWithTooltip
              breakoutRooms={breakoutRooms}
              setBreakoutRoomId={setBreakoutRoomId}
              breakoutRoomId={breakoutRoomId}
              closeBreakoutRooms={closeBreakoutRooms}
            ></BreakoutRoomsButtonWithTooltip>
          ) : (
            <BreakoutSessionButtonWithTooltip
              participants={participants}
              onSubmit={createBreakoutRooms}
            ></BreakoutSessionButtonWithTooltip>
          )}
          <Button primary className="sm:w-372px w-300px mb-3">
            <div className="flex items-center">
              <TurnOffIcon className="mr-3 w-24px"></TurnOffIcon>
              <div className="leading-none">Stop session</div>
            </div>
          </Button>
        </div>
        <div className="max-w-372px w-full flex-shrink-0 ml-5 hidden xl:block"></div>
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-wrap flex-grow mb-7">
          <div className="mr-12">
            <Cell
              value={participants.length}
              title="Participants"
              actionFn={() => setShowParticipants(true)}
              actionTitle="View"
            ></Cell>
            <Cell
              value={participants.filter((x) => x.role === "speaker").length}
              title="Schools/speakers"
            ></Cell>
            <Cell
              value={<EventDuration event={event}></EventDuration>}
              title="Event duration"
            ></Cell>
          </div>
          <div>
            <Cell title="Breakout rooms" value={breakoutRooms.length}></Cell>
            <ButtonBase
              onClick={() => history.push("/analytics")}
              className="outline-none h-40px transition rounded-lg text-white px-12 bg-orange-300 hover:bg-orange-301"
            >
              Analytics
            </ButtonBase>
          </div>
        </div>
        <div className="max-w-372px w-full flex-shrink-0">
          <SendMessageWidget
            value={message}
            setValue={setMessage}
            onSubmit={sendMessage}
          ></SendMessageWidget>
        </div>
      </div>
    </div>
  );
};

const ModeratorBottom = ({
  participants,
  setShowParticipants,
  event,
  sendMessage,
  breakoutRooms,
  breakoutRoomId,
  closeBreakoutRooms,
  createBreakoutRooms,
  setBreakoutRoomId,
}) => {
  const [message, setMessage] = useState("");
  const history = useHistory();

  return (
    <div>
      <div className="flex py-7 border-b border-gray-700 mb-7">
        <div className="flex flex-grow flex-wrap items-center justify-between">
          {breakoutRooms.length ? (
            <BreakoutRoomsButtonWithTooltip
              breakoutRooms={breakoutRooms}
              setBreakoutRoomId={setBreakoutRoomId}
              breakoutRoomId={breakoutRoomId}
              closeBreakoutRooms={closeBreakoutRooms}
            ></BreakoutRoomsButtonWithTooltip>
          ) : (
            <BreakoutSessionButtonWithTooltip
              participants={participants}
              onSubmit={createBreakoutRooms}
            ></BreakoutSessionButtonWithTooltip>
          )}
          <Button primary className="sm:w-372px w-300px mb-3">
            <div className="flex items-center">
              <TurnOffIcon className="mr-3 w-24px"></TurnOffIcon>
              <div className="leading-none">Stop session</div>
            </div>
          </Button>
        </div>
        <div className="max-w-372px w-full flex-shrink-0 ml-5 hidden xl:block"></div>
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-wrap flex-grow mb-7">
          <div className="mr-12">
            <Cell
              value={participants.length}
              title="Participants"
              actionFn={() => setShowParticipants(true)}
              actionTitle="View"
            ></Cell>
            <Cell
              value={participants.filter((x) => x.role === "speaker").length}
              title="Schools/speakers"
            ></Cell>
            <Cell
              value={<EventDuration event={event}></EventDuration>}
              title="Event duration"
            ></Cell>
          </div>
          <div>
            <Cell title="Breakout rooms" value={breakoutRooms.length}></Cell>
            <ButtonBase
              onClick={() => history.push("/analytics")}
              className="outline-none h-40px transition rounded-lg text-white px-12 bg-orange-300 hover:bg-orange-301"
            >
              Analytics
            </ButtonBase>
          </div>
        </div>
        <div className="max-w-372px w-full flex-shrink-0">
          <SendMessageWidget
            value={message}
            setValue={setMessage}
            onSubmit={sendMessage}
          ></SendMessageWidget>
        </div>
      </div>
    </div>
  );
};

const SpeakerBottom = ({
  event,
  participants,
  setShowParticipants,
  user,
  sendMessage,
  breakoutRoomId,
  breakoutRooms,
}) => {
  const [message, setMessage] = useState("");
  const [assignModeratorOpen, setAssignModeratorOpen] = useState(false);
  const [moderator, setModerator] = useState(null);
  const history = useHistory();
  return (
    <div>
      <SelectModal
        onClose={() => setAssignModeratorOpen(false)}
        onSubmit={() => setAssignModeratorOpen(false)}
        open={assignModeratorOpen}
        value={moderator}
        setValue={(val) => setModerator(val, breakoutRoomId)}
        title="Select Speaker/School Representative"
        items={participants
          .filter((x) => x.role === "moderator")
          .map((x) => ({
            title: x.fullName,
            value: x.id,
            action: {
              title: "View profile",
              fn: async () => {
                setAssignModeratorOpen(false);
                await ViewProfile({ user: x, zIndex: 1000 });
                setAssignModeratorOpen(TrainRounded);
              },
            },
          }))}
      ></SelectModal>

      <div className="flex border-b border-gray-500 mb-6">
        <div className="flex flex-grow flex-wrap items-center justify-between py-6">
          <Button
            onClick={() => setAssignModeratorOpen(true)}
            secondary
            className="w-372px mr-5 mb-3"
          >
            Assign moderator
          </Button>
          <Button primary className="w-372px mb-3">
            <div className="flex items-center">
              <div className="leading-none">Leave session</div>
            </div>
          </Button>
        </div>
        <div className="max-w-372px w-full ml-5 hidden xl:block"></div>
      </div>
      <div className="flex flex-wrap xl:flex-nowrap">
        <div className="flex-grow flex flex-wrap mb-7">
          <div className="mr-7">
            <div className="flex items-center mb-7">
              <div className="w-224px">Participants:</div>
              <div className="w-96px">{participants.length}</div>
              <div
                className="text-orange-400 cursor-pointer select-none"
                onClick={() => setShowParticipants(true)}
              >
                View
              </div>
            </div>
            <div className="flex items-center mb-7 mr-7">
              <div className="w-224px">Event duration:</div>
              <div className="w-96px">
                <EventDuration event={event}></EventDuration>
              </div>
            </div>
          </div>

          <div className="mr-7">
            <ButtonBase
              onClick={() => history.push("/analytics")}
              className="outline-none h-40px transition rounded-lg text-white px-12 bg-orange-300 hover:bg-orange-301"
            >
              Analytics
            </ButtonBase>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <QRCode
                value={`Full name: ${user.fullName}\nSchool: ${user.school}\nJob: ${user.jobTitle}`}
              ></QRCode>
            </div>
            <div className="text-blue-400 text-center">Your profile info</div>
          </div>
        </div>
        <div className="xl:max-w-372px w-full xl:ml-5 max-w-full">
          <SendMessageWidget
            value={message}
            setValue={setMessage}
            onSubmit={sendMessage}
          ></SendMessageWidget>
        </div>
      </div>
    </div>
  );
};

const StudentBottom = ({
  event,
  participants,
  setShowParticipants,
  sendMessage,
  isTimeToSelectSpeaker,
  selectSpeaker,
  user,
}) => {
  const [message, setMessage] = useState("");
  const [openSelectSpeaker, setOpenSelectSpeaker] = useState(false);
  const selectedSpeaker = participants.find((x) => x.id === user.selectedSpeaker);
  return (
    <div>
      <div className="flex border-b border-gray-500 mb-7">
        <SelectModal
          onClose={() => setOpenSelectSpeaker(false)}
          onSubmit={() => setOpenSelectSpeaker(false)}
          open={openSelectSpeaker}
          value={user.selectedSpeaker}
          setValue={selectSpeaker}
          title="Select Speaker/School Representative"
          items={participants.map((x) => ({
            title: x.fullName,
            value: x.id,
            action: { title: "View profile", fn: () => ViewProfile({ user: x, zIndex: 100000 }) },
          }))}
        ></SelectModal>
        {isTimeToSelectSpeaker ? (
          <div className="py-7">
            <Button onClick={() => setOpenSelectSpeaker(true)} primary>
              Select Speaker/School Representative
            </Button>
          </div>
        ) : selectedSpeaker ? (
          <div className="flex justify-between flex-grow flex-wrap py-7">
            <div className="flex items-center mb-3">
              <div
                className="w-64px h-64px bg-center bg-cover mr-4 rounded-full"
                style={{ backgroundImage: `url(${selectedSpeaker.image})` }}
              ></div>
              <div>
                <div>
                  {selectedSpeaker.fullName}({selectedSpeaker.school})
                </div>
                <div
                  className="text-orange-400 cursor-pointer"
                  onClick={() => ViewProfile({ user: selectedSpeaker })}
                >
                  See details
                </div>
              </div>
            </div>
            <div className="mb-3">
              <QRCode
                size={70}
                value={`Full name: ${selectedSpeaker.fullName}\nSchool: ${selectedSpeaker.school}\nJob: ${selectedSpeaker.jobTitle}`}
              ></QRCode>
            </div>
          </div>
        ) : (
          <div className="py-7 flex-grow flex justify-between">
            <div className="flex-grow mr-7 max-w-620px">
              <div className="mb-3">{event.title}</div>
              <div className="line-clamp-3 mb-4">{event.description}</div>
              <div className="flex items-center mb-2">
                <div className="w-224px">Participants:</div>
                <div className="w-96px">{participants.length}</div>
                <div
                  className="text-orange-400 cursor-pointer select-none"
                  onClick={() => setShowParticipants(true)}
                >
                  View
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-224px">Event duration:</div>
                <div className="w-96px">
                  <EventDuration event={event}></EventDuration>
                </div>
              </div>
            </div>
            <ShareButton event={event}></ShareButton>
          </div>
        )}

        <div className="max-w-372px w-full flex-shrink-0 ml-5 hidden xl:block"></div>
      </div>
      <div className="flex">
        <div className="flex-grow">
          <SendMessageWidget
            value={message}
            setValue={setMessage}
            onSubmit={sendMessage}
          ></SendMessageWidget>
        </div>
        <div className="max-w-372px w-full flex-shrink-0 ml-5 hidden xl:block"></div>
      </div>
    </div>
  );
};

const Bottom = (props) => {
  return props.user.role === "student" ? (
    <StudentBottom {...props}></StudentBottom>
  ) : props.user.role === "speaker" ? (
    <SpeakerBottom {...props}></SpeakerBottom>
  ) : props.user.role === "moderator" ? (
    <ModeratorBottom {...props}></ModeratorBottom>
  ) : props.user.role === "admin" ? (
    <AdminBottom {...props}></AdminBottom>
  ) : null;
};

export default Bottom;
