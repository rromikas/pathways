import Button from "components/Button";

const SpeakerBottom = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center pt-10 pb-8 border-b border-gray-500">
        <Button secondary className="w-372px mr-5 mb-3">
          Assign moderator
        </Button>
        <Button primary className="w-372px mb-3">
          <div className="flex items-center">
            <div className="leading-none">Leave session</div>
          </div>
        </Button>
      </div>
      <div className="flex flex-wrap"></div>
    </div>
  );
};

export default SpeakerBottom;
