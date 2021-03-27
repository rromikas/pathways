import Select from "components/Select";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import Dropzone from "components/Dropzone";
import Input from "components/Input";
import Textarea from "components/Textarea";
import Fill from "assets/blue_fill.png";
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
          <div className="text-orange-400 text-24px font-medium mb-18px">
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
              <ButtonBase className="h-48px mr-3 mb-3 w-192px border border-solid outline-none border-gray-800 rounded-lg">
                Student
              </ButtonBase>
              <ButtonBase className="h-48px w-224px mb-3 transition bg-orange-400 hover:bg-orange-500 outline-none text-white rounded-lg">
                School Representative
              </ButtonBase>
            </div>
          </div>
          <Label className="mt-5">Upload profile image (Recommended 60px*150px)</Label>
          <Dropzone
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
          ></Input>
          <Label>What school are you representing</Label>
          <Input
            type="text"
            value={values.school}
            name="school"
            onChange={handleChange}
            className="w-full"
          ></Input>
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
          <Label>Tell us about you</Label>
          <Textarea
            className="w-full"
            value={values.about}
            onChange={handleChange}
            name="about"
          ></Textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <ButtonBase className="text-18px outline-none h-48px w-256px rounded-lg bg-orange-400 hover:bg-orange-500 text-white">
          Save
        </ButtonBase>
      </div>
    </div>
  );
};

export default Profile;
