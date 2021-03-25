import { default as MUISelect } from "@material-ui/core/Select";
import ArrowDown from "@material-ui/icons/ArrowDropDown";

const IconComponent = () => {
  return (
    <div className="-mx-2">
      <ArrowDown></ArrowDown>
    </div>
  );
};

const Select = ({ items, value, setValue }) => {
  return (
    <MUISelect
      value={value}
      IconComponent={IconComponent}
      disableUnderline
      className="w-full bg-gray-400 px-5 rounded-xl h-48px"
      native
      classes={{
        root: "focus:bg-transparent",
      }}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      <option value="" className="text-blue-900">
        Select
      </option>
      {items.map((x, i) => (
        <option key={`${Math.random()}-opt-${i}`} value={x} className="text-blue-900">
          {x}
        </option>
      ))}
    </MUISelect>
  );
};

export default Select;
