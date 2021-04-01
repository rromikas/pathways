import DayPicker from "components/DayPicker";
import Input from "components/Input";
import DateIcon from "@material-ui/icons/DateRange";
import moment from "moment";

const DateInput = ({ value, setValue }) => {
  return (
    <DayPicker setValue={(val) => setValue(val)} value={value}>
      <div className="relative">
        <DateIcon className="absolute top-0 bottom-0 left-8px my-auto text-gray-600"></DateIcon>
        <Input
          placeholder="Set date"
          className="w-full pl-40px"
          value={value ? moment(value).format("YYYY-MM-DD") : "Set date"}
          onChange={() => {}}
        ></Input>
      </div>
    </DayPicker>
  );
};

export default DateInput;
