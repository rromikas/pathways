import Button from "components/Button";
import { ReactComponent as TurnOffIcon } from "assets/turn_off.svg";
import { ReactComponent as BreakoutSessionIcon } from "assets/turn_off.svg";

const AdminBottom = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center pt-10 pb-8 border-b border-gray-500">
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
      <div className="flex flex-wrap"></div>
    </div>
  );
};

export default AdminBottom;
