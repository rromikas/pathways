import VolumeOffIcon from "@material-ui/icons/VolumeOffRounded";
import VolumeUpIcon from "@material-ui/icons/VolumeUpRounded";

const FocusedParticipant = ({ participant }) => {
  return (
    <div style={{ maxWidth: 383, width: "100%" }} className="relative">
      <div className="absolute left-1 bottom-1 text-white text-32px">
        {participant.muted ? (
          <VolumeOffIcon fontSize="inherit"></VolumeOffIcon>
        ) : (
          <VolumeUpIcon fontSize="inherit"></VolumeUpIcon>
        )}
      </div>
      <div
        className="bg-center bg-cover"
        style={{
          backgroundImage: `url(${participant.photo})`,
          width: "100%",
          paddingTop: "72%",
        }}
      ></div>
    </div>
  );
};

export default FocusedParticipant;
