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
import * as yup from "yup";
import { useNotify } from "notifications";

const Label = ({ children, className = "", first = false, error = "" }) => {
  return (
    <div className={`text-gray-800 mb-2 ${!first ? "mt-3" : ""} justify-between flex ` + className}>
      <div>{children}</div>
      <div className={`${error ? "text-red-400" : "text-transparent"}`}>{error}</div>
    </div>
  );
};

const CreateEventPage = ({ onCreateEvent }) => {
  const notify = useNotify();
  const { values, errors, handleChange, setFieldValue, handleSubmit, submitCount } = useFormik({
    initialValues: {
      id: +(Math.random() * 1000).toFixed(0),
      time: null,
      date: null,
      image: null,
      description: "",
      title: "",
      details: [],
    },
    validationSchema: yup.object().shape({
      image: yup.string().required("Required"),
      time: yup.date().typeError("Required"),
      date: yup.date().typeError("Required"),
      description: yup.string().required("Required"),
      title: yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      onCreateEvent(values);
    },
  });

  useEffect(() => {
    if (submitCount > 0 && Object.keys(errors).length) {
      notify("Fill required values");
    }
  }, [submitCount]);

  return (
    <div className="p-12 rounded-xl" style={{ boxShadow: "0px 3px 8px 0px rgba(0,0,0,0.1)" }}>
      <div className="flex flex-wrap mb-28">
        <div className="xl:w-1/2 lg:w-full w-full md:w-1/2 md:pr-12 lg:pr-0 xl:pr-12 md:border-r lg:border-0 xl:border-r border-gray-500">
          <Label error={submitCount > 0 ? errors["image"] : ""}>
            Upload event image (Recommended 60px*150px)
          </Label>
          <Dropzone
            files={values.image ? [values.image] : []}
            onFiles={(f) => setFieldValue("image", URL.createObjectURL(f[0]))}
          ></Dropzone>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <Label error={submitCount > 0 ? errors["time"] : ""}>Event time</Label>
              <TimeInput
                value={values.time}
                setValue={(val) => setFieldValue("time", val)}
              ></TimeInput>
            </div>
            <div className="w-1/2 pl-2">
              <Label error={submitCount > 0 ? errors["date"] : ""}>Event date</Label>
              <DateInput
                value={values.date}
                setValue={(val) => {
                  setFieldValue("date", val);
                }}
              ></DateInput>
            </div>
          </div>
          <Label error={submitCount > 0 ? errors["title"] : ""}>Event title</Label>
          <Input
            name="title"
            onChange={handleChange}
            value={values.title}
            placeholder="Enter title"
            className="w-full"
          ></Input>
          <Label error={submitCount > 0 ? errors["description"] : ""}>Event description</Label>
          <Textarea
            className="w-full"
            placeholder="Write here"
            value={values.description}
            name="description"
            onChange={handleChange}
          ></Textarea>
          <div className="text-right">MAX 150 words</div>
        </div>
        <div className="xl:w-1/2 lg:w-full w-full md:w-1/2 md:pl-12 lg:pl-0 xl:pl-12">
          <div className="text-blue-400 mb-7">Event details</div>
          {values.details.map((x, i) => (
            <div key={`timeslot-${i}`} className="flex flex-wrap justify-end items-start mb-3">
              <div className="w-1/2 pr-2">
                <TimeInput
                  value={x.time}
                  setValue={(val) => {
                    let arr = [...values.details];
                    arr[i].time = val;
                    setFieldValue("details", arr);
                  }}
                ></TimeInput>
              </div>
              <div className="w-1/2 pl-2">
                <Input
                  className="w-full mb-2"
                  placeholder="Topic"
                  value={x.topic}
                  onChange={(e) => {
                    let arr = [...values.details];
                    arr[i].topic = e.target.value;
                    setFieldValue("details", arr);
                  }}
                ></Input>
                {!("description" in x) ? (
                  <div
                    className="flex items-center mb-2 cursor-pointer"
                    onClick={() => {
                      let arr = [...values.details];
                      arr[i].description = "";
                      setFieldValue("details", arr);
                    }}
                  >
                    <AddIcon className="mr-3"></AddIcon>
                    <div>Topic details</div>
                  </div>
                ) : null}
              </div>
              {"description" in x ? (
                <div className="w-1/2 pl-2">
                  <Textarea
                    className="w-full"
                    placeholder="Type your details"
                    value={x.description}
                    onChange={(e) => {
                      let arr = [...values.details];
                      arr[i].description = e.target.value;
                      setFieldValue("details", arr);
                    }}
                  ></Textarea>
                </div>
              ) : null}
            </div>
          ))}
          <ButtonBase
            onClick={() => setFieldValue("details", [...values.details, { time: null, topic: "" }])}
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
        <Button
          onClick={() => handleSubmit()}
          primary={values.role !== "student"}
          className="text-18px w-256px rounded-lg"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default CreateEventPage;
