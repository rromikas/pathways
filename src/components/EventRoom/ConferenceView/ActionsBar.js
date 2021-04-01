import { ReactComponent as PhoneIcon } from "assets/phone.svg";
import { ReactComponent as VideoIcon } from "assets/video.svg";
import { ReactComponent as NoVideoIcon } from "assets/no_video.svg";
import VolumeOffIcon from "@material-ui/icons/VolumeOffRounded";
import VolumeUpIcon from "@material-ui/icons/VolumeUpRounded";
import { ReactComponent as ExpandIcon } from "assets/expand.svg";
import { ReactComponent as ShareIcon } from "assets/share.svg";
import ButtonBase from "@material-ui/core/ButtonBase";

const ActionsBar = ({ videoOff = false, volumeOff = false }) => {
  return (
    <div className="flex hidden flex-wrap items-center justify-center absolute left-0 right-0 bottom-0 p-5">
      <ButtonBase className="outline-none transform hover:-translate-y-1 mr-32px w-56px h-56px flex items-center justify-center rounded-full cursor-pointer bg-white transition">
        <ExpandIcon className="w-28px"></ExpandIcon>
      </ButtonBase>
      <ButtonBase className="outline-none transform hover:-translate-y-1 mr-32px w-56px h-56px flex items-center justify-center rounded-full cursor-pointer bg-white transition">
        {!volumeOff ? (
          <VolumeUpIcon fontSize="inherit" className="text-28px"></VolumeUpIcon>
        ) : (
          <VolumeOffIcon fontSize="inherit" className="text-28px"></VolumeOffIcon>
        )}
      </ButtonBase>
      <ButtonBase className="outline-none w-80px h-80px flex items-center justify-center rounded-3xl cursor-pointer hover:bg-red-401 bg-red-400 transition">
        <PhoneIcon className="w-40px text-white fill-current"></PhoneIcon>
      </ButtonBase>
      <ButtonBase className="outline-none transform hover:-translate-y-1 ml-32px w-56px h-56px flex items-center justify-center rounded-full cursor-pointer bg-white transition">
        {!videoOff ? (
          <VideoIcon className="w-28px"></VideoIcon>
        ) : (
          <NoVideoIcon className="w-28px"></NoVideoIcon>
        )}
      </ButtonBase>
      <ButtonBase className="outline-none transform hover:-translate-y-1 ml-32px w-56px h-56px flex items-center justify-center rounded-full cursor-pointer bg-white transition">
        <ShareIcon className="w-28px"></ShareIcon>
      </ButtonBase>
    </div>
  );
};

export default ActionsBar;
