import ArrowDown from "@material-ui/icons/KeyboardArrowDown";
import ArrowUp from "@material-ui/icons/KeyboardArrowUp";

const NumberInput = ({ value, setValue }) => {
  return (
    <div className="flex border border-gray-800 rounded-lg h-40px items-center px-2">
      <input
        value={value}
        onChange={(e) => {
          const val = e.target.value;
          if (/^\d*$/.test(val)) {
            setValue(val);
          }
        }}
        className="outline-none w-56px h-20px"
      ></input>
      <div>
        <div
          className="h-12px flex items-center mb-1 rounded hover:bg-gray-500 active:bg-gray-550 transition cursor-pointer"
          onClick={() => setValue((prev) => +prev + 1)}
        >
          <ArrowUp fontSize="small" className="text-gray-700 fill-current"></ArrowUp>
        </div>
        <div
          className="h-12px flex items-center rounded hover:bg-gray-500 active:bg-gray-550 transition cursor-pointer"
          onClick={() => setValue((prev) => (+prev - 1 >= 0 ? +prev - 1 : +prev))}
        >
          <ArrowDown fontSize="small" className="text-gray-700 fill-current"></ArrowDown>
        </div>
      </div>
    </div>
  );
};

export default NumberInput;
