import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import StaticTimePicker from "@material-ui/lab/StaticTimePicker";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import moment from "moment";

const DayPickerComponent = ({ setValue, children, value }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open}>
        <div className="flex w-full h-full overflow-auto" onClick={() => setOpen(false)}>
          <div
            className="inline-block relative bg-white m-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticTimePicker
                ampm={false}
                ampmInClock={true}
                ToolbarComponent={(props) => {
                  return (
                    <div className="flex justify-between p-4">
                      <div className="font-bold text-24px cursor-pointer">
                        <span
                          className={props.openView === "hours" ? "text-orange-400" : ""}
                          onClick={() => props.setOpenView("hours")}
                        >
                          {props.date ? moment(props.date).format("hh") : "_ _"}
                        </span>
                        :
                        <span
                          className={props.openView === "minutes" ? "text-orange-400" : ""}
                          onClick={() => props.setOpenView("minutes")}
                        >
                          {props.date ? moment(props.date).format("mm") : "_ _"}
                        </span>
                        <span>{props.date ? moment(props.date).format("A") : ""}</span>
                      </div>
                      <div
                        onClick={() => setOpen(false)}
                        className="cursor-pointer transition justify-center flex items-center h-32px w-80px rounded-md text-white bg-orange-400 hover:bg-orange-500"
                      >
                        Save
                      </div>
                    </div>
                  );
                }}
                disableOpenPicker
                displayStaticWrapperAs="mobile"
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                value={value}
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
