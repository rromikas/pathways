import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ReactComponent as UploadIcon } from "assets/upload.svg";
import ButtonBase from "@material-ui/core/ButtonBase";

const MyDropzone = ({ onFiles, files, accept = "", multiple = false, onClick = () => {} }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple,
  });

  return (
    <div
      onClick={onClick}
      {...getRootProps()}
      className="flex items-center justify-center focus:outline-none bg-gray-400 px-9 py-7 rounded-xl cursor-pointer hover:bg-gray-401 transition"
    >
      <input {...getInputProps()} />
      <div className="flex flex-wrap justify-center w-full items-center">
        <div className="px-8 py-2">
          <UploadIcon></UploadIcon>
        </div>
        <div className="text-center text-gray-800 px-8 py-2">
          <div>Drag and Drop file</div>
          <div className="mb-1">Or</div>
          <ButtonBase className="h-32px px-8 outline-none items-center bg-orange-400 hover:bg-orange-500 text-white rounded">
            <div className="leading-none">Browse file</div>
          </ButtonBase>
          <div className="text-blue-400 mt-3">
            {files.length ? files.length + ` file${files.length > 1 ? "s" : ""} uploaded` : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDropzone;
