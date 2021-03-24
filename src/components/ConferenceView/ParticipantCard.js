import { ReactComponent as SoundIcon } from "assets/sound.svg";
import { ReactComponent as NoSoundIcon } from "assets/no_sound.svg";

const ParticipantCard = ({ key = Date.now(), participant, me = false }) => {
  return (
    <div className="p-2">
      <div className="relative">
        {/* Some cards are fillers that just fill the space. Don't care about it. */}
        {!participant.filler ? (
          <div className="absolute bottom-2 right-2">
            {participant.muted ? <NoSoundIcon></NoSoundIcon> : <SoundIcon></SoundIcon>}
          </div>
        ) : null}
        <div
          key={key}
          className="bg-cover bg-center rounded-md"
          style={{
            width: "100%",
            paddingTop: "100%",
            backgroundImage: `url(${participant.photo})`,
            boxShadow: me ? "inset 0px 0px 0px 5px #FBA56B" : "none",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ParticipantCard;
