import { ReactComponent as PhoneIcon } from "assets/phone.svg";
import { ReactComponent as VideoIcon } from "assets/video.svg";
import { ReactComponent as NoVideoIcon } from "assets/no_video.svg";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import { ReactComponent as ExpandIcon } from "assets/expand.svg";
import { ReactComponent as ShareIcon } from "assets/share.svg";

const ActionsBar = ({ videoOff = false, volumeOff = false }) => {
  return (
    <div className="flex flex-wrap items-center justify-center absolute left-0 right-0 bottom-0 p-5">
      <div className="transform hover:-translate-y-1 mr-32px w-56px h-56px flex items-center justify-center rounded-full cursor-pointer bg-white transition">
        <ExpandIcon className="w-28px"></ExpandIcon>
      </div>
      <div className="transform hover:-translate-y-1 mr-32px w-56px h-56px flex items-center justify-center rounded-full cursor-pointer bg-white transition">
        {!volumeOff ? (
          <VolumeUpIcon fontSize="inherit" className="text-28px"></VolumeUpIcon>
        ) : (
          <VolumeOffIcon fontSize="inherit" className="text-28px"></VolumeOffIcon>
        )}
      </div>
      <div className="w-80px h-80px flex items-center justify-center rounded-3xl cursor-pointer hover:bg-red-401 active:bg-red-402 bg-red-400 transition">
        <PhoneIcon className="w-40px text-white fill-current"></PhoneIcon>
      </div>
      <div className="transform hover:-translate-y-1 ml-32px w-56px h-56px flex items-center justify-center rounded-full cursor-pointer bg-white transition">
        {!videoOff ? (
          <VideoIcon className="w-28px"></VideoIcon>
        ) : (
          <NoVideoIcon className="w-28px"></NoVideoIcon>
        )}
      </div>
      <div className="transform hover:-translate-y-1 ml-32px w-56px h-56px flex items-center justify-center rounded-full cursor-pointer bg-white transition">
        <ShareIcon className="w-28px"></ShareIcon>
      </div>
    </div>
  );
};

export default ActionsBar;
