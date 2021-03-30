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

const Label = ({ children, className = "" }) => {
  return <div className={"text-gray-800 mb-2 mt-3 " + className}>{children}</div>;
};

const Profile = ({ user }) => {
  const [image, setImage] = useState([]);
  const { values, errors, handleChange, setFieldValue } = useFormik({
    initialValues: user,
  });

  console.log("values", values);

  useEffect(() => {
    if (user && user.image) {
      setImage([user.image]);
    }
  }, [user]);
  return (
    <div className="p-12 rounded-xl" style={{ boxShadow: "0px 3px 8px 0px rgba(0,0,0,0.1)" }}>
      <div className="flex flex-wrap mb-28">
        <div className="w-1/2 hidden md:block lg:hidden xl:block text-center pr-12 border-r border-gray-500">
          <div className="flex justify-center mb-18px">
            <div
              className="w-192px h-192px rounded-full bg-center bg-cover border-4 border-blue-400"
              style={{
                backgroundImage: `url(${image.length ? image[0] : Fill})`,
              }}
            ></div>
          </div>
          <div
            className={`${
              values.role !== "student" ? "text-orange-400" : "text-blue-400"
            } text-24px font-medium mb-18px`}
          >
            {values.fullName ? values.fullName : "Your name"}
          </div>
          <div className="text-18px mb-14px text-blue-400">Representing - {values.school}</div>
          <div className="break-words">
            {values.about
              ? values.about
              : "Here will appear information about you that will be visible for other users"}
          </div>
        </div>
        <div className="xl:w-1/2 lg:w-full w-full md:w-1/2 md:pl-12 lg:pl-0 xl:pl-12">
          <div className="flex flex-wrap items-center">
            <div className="text-gray-800 mr-3 mb-3">Are you a</div>
            <div className="flex flex-wrap">
              <Button
                onClick={() => setFieldValue("role", "student")}
                outlined={values.role !== "student"}
                className="mr-3 mb-3 w-192px rounded-lg"
              >
                Student
              </Button>
              <Button
                onClick={() => setFieldValue("role", "speaker")}
                primary={values.role !== "student"}
                outlined={values.role === "student"}
                className="w-224px rounded-lg"
              >
                School Representative
              </Button>
            </div>
          </div>
          <Label className="mt-5">Upload profile image (Recommended 60px*150px)</Label>
          <Dropzone
            primary={values.role !== "student"}
            files={image}
            onFiles={(files) => setImage(files.map((x) => URL.createObjectURL(x)))}
          ></Dropzone>
          <Label>Full name</Label>
          <Input
            type="text"
            value={values.fullName}
            name="fullName"
            onChange={handleChange}
            className="w-full"
            placeholder="Type your full name here"
          ></Input>
          <Label>
            {values.role === "student" ? "School attending" : "What school are you representing"}
          </Label>
          <Input
            type="text"
            placeholder="Type school name"
            value={values.school}
            name="school"
            onChange={handleChange}
            className="w-full"
          ></Input>
          {values.role !== "student" ? (
            <>
              <Label>Type of school</Label>
              <Select
                items={schoolTypes}
                value={values.schoolType}
                setValue={(val) => setFieldValue("schoolType", val)}
              ></Select>
              <Label>Job title</Label>
              <Select
                items={jobTitles}
                value={values.jobTitle}
                setValue={(val) => setFieldValue("jobTitle", val)}
              ></Select>
            </>
          ) : (
            <>
              <Label>Current GPA</Label>
              <Input
                type="text"
                value={values.gpa}
                name="gpa"
                placeholder="GPA"
                onChange={handleChange}
                className="w-full"
              ></Input>
            </>
          )}

          <Label>Tell us about you</Label>
          <Textarea
            placeholder="Write here"
            className="w-full"
            value={values.about}
            onChange={handleChange}
            name="about"
          ></Textarea>
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

export default Profile;
