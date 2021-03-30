import Select from "components/Select";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import Dropzone from "components/Dropzone";
import Input from "components/Input";
import Textarea from "components/Textarea";
import Fill from "assets/blue_fill.png";
import Button from "components/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import { schoolTypes, jobTitles } from "data";
import AddIcon from "@material-ui/icons/Add";
import DateInput from "components/DateInput";
import TimeInput from "components/TimeInput";

const Label = ({ children, className = "", first = false }) => {
  return (
    <div className={`text-gray-800 mb-2 ${!first ? "mt-3" : ""} text-left ` + className}>
      {children}
    </div>
  );
};

const CreateEventPage = ({ user }) => {
  const [image, setImage] = useState([]);
  const { values, errors, handleChange, setFieldValue } = useFormik({
    initialValues: { time: null, date: null, description: "" },
  });

  const [timeslots, setTimeslots] = useState([]);

  console.log("values", values);

  useEffect(() => {
    if (user && user.image) {
      setImage([user.image]);
    }
  }, [user]);
  return (
    <div className="p-12 rounded-xl" style={{ boxShadow: "0px 3px 8px 0px rgba(0,0,0,0.1)" }}>
      <div className="flex flex-wrap mb-28">
        <div className="w-1/2 hidden md:block lg:hidden xl:block pr-12 border-r border-gray-500">
          <Label first>Upload event image (Recommended 60px*150px)</Label>
          <Dropzone files={image}></Dropzone>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <Label>Event time</Label>
              <TimeInput
                value={values.time}
                setValue={(val) => setFieldValue("time", val)}
              ></TimeInput>
            </div>
            <div className="w-1/2 pl-2">
              <Label>Event date</Label>
              <DateInput
                value={values.date}
                setValue={(val) => setFieldValue("date", val)}
              ></DateInput>
            </div>
          </div>
          <Label>Event description</Label>
          <Textarea className="w-full" placeholder="Write here"></Textarea>
          <div className="text-right">MAX 150 words</div>
        </div>
        <div className="xl:w-1/2 lg:w-full w-full md:w-1/2 md:pl-12 lg:pl-0 xl:pl-12">
          <div className="text-blue-400 mb-7">Event details</div>
          {timeslots.map((x, i) => (
            <div key={`timeslot-${i}`} className="flex flex-wrap justify-end items-start mb-3">
              <div className="w-1/2 pr-2">
                <TimeInput
                  value={x.time}
                  setValue={(val) =>
                    setTimeslots((prev) => {
                      let arr = [...prev];
                      arr[i].time = val;
                      return arr;
                    })
                  }
                ></TimeInput>
              </div>
              <div className="w-1/2 pl-2">
                <Input className="w-full mb-2" placeholder="Topic"></Input>
                {!("details" in x) ? (
                  <div
                    className="flex items-center mb-2 cursor-pointer"
                    onClick={() =>
                      setTimeslots((prev) => {
                        let arr = [...prev];
                        arr[i].details = "";
                        return arr;
                      })
                    }
                  >
                    <AddIcon className="mr-3"></AddIcon>
                    <div>Topic details</div>
                  </div>
                ) : null}
              </div>
              {"details" in x ? (
                <div className="w-1/2 pl-2">
                  <Textarea className="w-full" placeholder="Type your details"></Textarea>
                </div>
              ) : null}
            </div>
          ))}
          <ButtonBase
            onClick={() => setTimeslots((prev) => [...prev, { time: null, topic: "" }])}
            className="h-48px bg-gray-400 hover:bg-gray-401 justify-start outline-none rounded-lg transition px-4 w-full"
          >
            <div className="flex items-center">
              <AddIcon className="mr-3"></AddIcon>
              <div>Add a time slot</div>
            </div>
          </ButtonBase>
        </div>
      </div>
      <div className="flex justify-center">
        <Button primary={values.role !== "student"} className="text-18px w-256px rounded-lg">
          Save
        </Button>
      </div>
    </div>
  );
};

export default CreateEventPage;
