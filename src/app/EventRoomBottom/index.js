import Button from "components/Button";
import { ReactComponent as TurnOffIcon } from "assets/turn_off.svg";
import { ReactComponent as BreakoutSessionIcon } from "assets/breakout_session.svg";
import { ReactComponent as SendIcon } from "assets/send.svg";
import { ReactComponent as ShareIcon } from "assets/share.svg";
import EventDuration from "components/EventDuration";
import ButtonBase from "@material-ui/core/ButtonBase";
import QRCode from "components/QRCode";
import { useState } from "react";
import { ReactComponent as FacebookIcon } from "assets/share_facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/share_instagram.svg";
import { ReactComponent as WhatsappIcon } from "assets/share_whatsapp.svg";
import { ReactComponent as TwitterIcon } from "assets/share_twitter.svg";
import { ReactComponent as LinkedinIcon } from "assets/share_linkedin.svg";
import { Tooltip } from "react-tippy";

const SendMessageButton = () => {
  return (
    <div className="h-56px rounded-lg border border-blue-400 flex items-center px-6">
      <input
        placeholder="Say something to people"
        type="text"
        className="outline-none text-blue-400 border-none bg-transparent placeholder-blue-400 h-full flex-grow"
      ></input>
      <SendIcon></SendIcon>
    </div>
  );
};

const socNetworks = [FacebookIcon, InstagramIcon, WhatsappIcon, TwitterIcon, LinkedinIcon];

const ShareButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Tooltip
        open={open}
        position="right"
        html={
          <div className="flex bg-white rounded-md p-4 shadow-custom m-3">
            {socNetworks.map((x, i) => {
              const Icon = x;
              return (
                <Icon
                  className="transform hover:scale-110 transition mr-3 cursor-pointer"
                  key={`socNetwork-icon-${i}`}
                ></Icon>
              );
            })}
          </div>
        }
      >
        <Button
          floating
          onClick={() => setOpen((prev) => !prev)}
          className="outline-none self-start text-orange-400 h-56px w-56px"
        >
          <ShareIcon className="fill-current"></ShareIcon>
        </Button>
      </Tooltip>
    </div>
  );
};

const AdminBottom = () => {
  return (
    <div className="flex">
      <div className="flex flex-grow flex-wrap items-center justify-between pt-10 pb-8 border-b border-gray-500">
        <Button secondary className="w-372px mr-5 mb-3">
          <div className="flex items-center">
            <BreakoutSessionIcon className="mr-3 w-24px"></BreakoutSessionIcon>
            <div className="leading-none">Start breakout session</div>
          </div>
        </Button>
        <Button primary className="w-372px mb-3">
          <div className="flex items-center">
            <TurnOffIcon className="mr-3 w-24px"></TurnOffIcon>
            <div className="leading-none">Stop session</div>
          </div>
        </Button>
      </div>
      <div className="max-w-372px w-full flex-shrink-0 ml-5 hidden xl:block"></div>
    </div>
  );
};

const ModeratorBottom = () => {
  return <div></div>;
};

const SpeakerBottom = ({ event, participants, setShowParticipants, user, goToAnalyticsPage }) => {
  return (
    <div>
      <div className="flex border-b border-gray-500 mb-6">
        <div className="flex flex-grow flex-wrap items-center justify-between py-6">
          <Button secondary className="w-372px mr-5 mb-3">
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
              onClick={() => goToAnalyticsPage(event)}
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
          <SendMessageButton></SendMessageButton>
        </div>
      </div>
    </div>
  );
};

const StudentBottom = ({ event, participants, setShowParticipants }) => {
  return (
    <div>
      <div className="flex border-b border-gray-500 mb-7">
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
          <ShareButton></ShareButton>
        </div>
        <div className="max-w-372px w-full flex-shrink-0 ml-5 hidden xl:block"></div>
      </div>
      <div className="flex">
        <div className="flex-grow">
          <SendMessageButton></SendMessageButton>
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
