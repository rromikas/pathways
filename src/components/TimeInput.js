import Input from "components/Input";
import TimeIcon from "@material-ui/icons/AccessTime";
import TimePicker from "components/TimePicker";
import moment from "moment";

const TimeInput = ({ value, setValue }) => {
  return (
    <TimePicker value={value} setValue={(val) => setValue(val)}>
      <div className="relative">
        <TimeIcon className="absolute top-0 bottom-0 left-8px my-auto text-gray-600"></TimeIcon>
        <Input
          placeholder="Set time"
          className="w-full pl-40px"
          value={value ? moment(value).format("hh:mm A") : "Set time"}
          onChange={() => {}}
        ></Input>
      </div>
    </TimePicker>
  );
};

export default TimeInput;
