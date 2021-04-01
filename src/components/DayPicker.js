import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";

const DayPickerComponent = ({ value, setValue, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open}>
        <div className="flex w-full h-full overflow-auto" onClick={() => setOpen(false)}>
          <div className="inline-block bg-white m-auto" onClick={(e) => e.stopPropagation()}>
            <style>{`.DayPicker-Day:hover {
              background-color: #f05a28 !important;
              color: white;
            }`}</style>
            <DayPicker
              modifiersStyles={{
                selected: {
                  background: "#1A3A4F",
                },
                today: { color: "#f05a28" },
              }}
              selectedDays={[value]}
              onDayClick={(newValue) => {
                setValue(newValue);
                setOpen(false);
              }}
            />
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
