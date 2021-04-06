import Select from "react-select";

const SelectComponent = ({
  items,
  value,
  setValue,
  primary = false,
  outlined = false,
  defaultValue = "",
  dark = false,
}) => {
  const customStyles = {
    menuList: (provided, state) => ({
      ...provided,
      maxHeight: 210,
    }),
    menu: (provided, state) => ({
      ...provided,
      overflow: "hidden",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      background: state.isFocused ? (primary ? "#F05A28" : "#1A3A4F") : "white",
      color: state.isFocused ? "white" : "black",
      height: 40,
      display: "flex",
      alignItems: "center",
      "&:hover": {
        background: primary ? "#F05A28" : "#1A3A4F",
        color: "white",
      },
    }),
    control: () => ({
      width: "100%",
      color: outlined ? (dark ? "#1A3A4F" : "white") : "inherit",
      background: outlined ? "transparent" : "#F5F5F5",
      border: outlined ? (dark ? "1px solid #1A3A4F" : "1px solid white") : "none",
      display: "flex",
      padding: "0 14px",
      borderRadius: 7,
      height: 48,
      cursor: "pointer",
    }),
    placeholder: () => ({
      color: outlined ? (dark ? "#1A3A4F" : "white") : "black",
    }),
    dropdownIndicator: () => ({
      color: dark ? "#1A3A4F" : "white",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return {
        ...provided,
        opacity,
        transition,
        color: outlined ? (dark ? "#1A3A4F" : "white") : "inherit",
      };
    },
  };

  return (
    <Select
      options={items.map((x, i) => ({ value: x, label: x, isSelected: value === x }))}
      styles={customStyles}
      placeholder="Select"
      onChange={(opt) => setValue(opt.value)}
      defaultInputValue={defaultValue}
      value={[{ value, label: value }]}
      components={{
        IndicatorSeparator: () => null,
      }}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          neutral50: "#9ca3af",
        },
      })}
    ></Select>
  );
};

export default SelectComponent;
