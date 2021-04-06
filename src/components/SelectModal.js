import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import Radio from "@material-ui/core/Radio";
import Button from "components/Button";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Simplebar from "simplebar-react";
import PropTypes from "prop-types";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F05A28",
    },
  },
});

const SelectModal = ({
  open,
  onClose,
  multiple = false,
  items,
  title,
  value,
  setValue,
  onSubmit,
}) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Modal open={open} onClose={onClose}>
        <div
          className="w-full h-full bg-black bg-opacity-40 flex overflow-auto p-7"
          onClick={onClose}
        >
          <div
            className="m-auto max-w-560px w-full bg-white rounded-lg overflow-hidden max-h-620px h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-12 bg-blue-400 text-white relative text-center py-3">
              {title}
              <div
                onClick={onClose}
                className="absolute right-5 top-0 bottom-0 my-auto h-32px w-32px bg-blue-300 hover:bg-blue-400 rounded-full cursor-pointer transition flex justify-center items-center"
              >
                <CloseIcon></CloseIcon>
              </div>
            </div>
            <div className="flex-grow h-0">
              <Simplebar className="h-full">
                {items.map((x, i) => (
                  <div
                    onClick={() =>
                      !multiple
                        ? setValue(value === x.value ? "" : x.value)
                        : value.includes(x.value)
                        ? setValue(value.filter((v) => v !== x.value))
                        : setValue([x.value, ...value])
                    }
                    key={`select-modal-item-${i}`}
                    className="sm:flex block items-center justify-between pl-4 py-4 sm:pr-7 pr-4 border-b border-gray-500"
                  >
                    <div className="flex items-center cursor-pointer select-none mr-3">
                      <Radio
                        color="primary"
                        checked={!multiple ? value === x.value : value.includes(x.value)}
                        className="mr-4"
                      ></Radio>
                      <div>{x.title}</div>
                    </div>
                    {x.action ? (
                      <div
                        className="text-orange-400 cursor-pointer text-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          x.action.fn();
                        }}
                      >
                        {x.action.title}
                      </div>
                    ) : null}
                  </div>
                ))}
              </Simplebar>
            </div>
            <div className="flex justify-center p-7">
              <Button className="w-372px" primary onClick={onSubmit}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </MuiThemeProvider>
  );
};

export default SelectModal;

SelectModal.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      title: PropTypes.string,
      action: PropTypes.shape({
        title: PropTypes.string,
        fn: PropTypes.func,
      }),
    })
  ),
};
