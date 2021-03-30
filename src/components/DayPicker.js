import DayPicker from "@material-ui/lab/DayPicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";

const DayPickerComponent = ({ value, setValue, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open}>
        <div className="flex w-full h-full overflow-auto" onClick={() => setOpen(false)}>
          <div className="inline-block bg-white m-auto" onClick={(e) => e.stopPropagation()}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DayPicker
                allowKeyboardControl={false}
                date={value}
                onChange={(newValue) => {
                  setValue(newValue);
                  setOpen(false);
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
      </Modal>
      <div className="w-full" onClick={() => setOpen((prev) => !prev)}>
        {children}
      </div>
    </>
  );
};

export default DayPickerComponent;
