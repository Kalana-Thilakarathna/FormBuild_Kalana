import React, { useContext, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaGear } from "react-icons/fa6";
import "../../App.css";
import { FormDataContext } from "../../hooks/useFormData";
import { TbAlignBoxLeftMiddleFilled, TbAlignBoxRightMiddleFilled } from "react-icons/tb";
import { MdOutlineFileUpload } from "react-icons/md";

function Welcome({ onClose }) {
  const { formData, updateFormData } = useContext(FormDataContext);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const hanldeimage = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (file && allowedTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageurl = reader.result;
        updateFormData({ image: imageurl });
      };
      reader.readAsDataURL(file);
    } else {
      // Show alert if the file type is not allowed
      alert("Invalid file type. Only PNG, JPEG, and JPG formats are allowed.");
      e.target.value = ""; // Clear the file input
    }
  };

  const removeimg = () => {
    updateFormData({ image: null });
  };

  const hadleAlignleft = () => {
    updateFormData({ align: "left" });
  };

  const hadleAlignRight = () => {
    updateFormData({ align: "right" });
  };

  const handleSave = () => {
    updateFormData({ formData });
    onClose();
  };

  const handleDiscard = () => {
    onClose();
  };

  return (
    <div className="bg-white w-full h-full p-2 flex flex-col">
      <div className="flex justify-between items-center mr-3 mt-1">
        <div className="flex flex-row items-center">
          <FaGear />
          <h1 className="text-sm font-arial font-semibold ml-3">Settings</h1>
        </div>
        <button
          onClick={onClose}
          className="hover:text-red-400 duration-500 transition-all rounded-md p-1 drop-shadow-md bg-white border-x-2"
        >
          <RxCross2 />
        </button>
      </div>

      <div className="mt-7 mr-3">
        <form>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="w-full p-1 rounded-md border-2 border-gray-200 mt-2"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <label>Description</label>
            <input
              type="text"
              name="description"
              className="w-full p-1 rounded-md border-2 border-gray-200 mt-2"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="mt-2">
            <label>Button Text</label>
            <input
              type="text"
              name="button"
              className="w-full p-1 rounded-md border-2 border-gray-200 mt-2"
              value={formData.button}
              onChange={handleChange}
            />
          </div>

          <div className="mt-3">
            <input
              type="file"
              name="file"
              className="hidden"
              onChange={hanldeimage}
              ref={fileInputRef}
              accept=".png,.jpg,.jpeg" // This restricts file selection in the dialog
            />
            <button
              onClick={handleFileInputClick}
              type="button"
              className="flex flex-row bg-gray-200 rounded-lg gap-1 px-2 py-1 mt-2 items-center"
            >
              <MdOutlineFileUpload className="mr-2" />
              Upload
            </button>

            {formData.image && (
              <>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={formData.image}
                    alt="preview"
                    className="w-300 h-300 mt-2"
                  />
                  {formData.image && (
                    <button
                      onClick={removeimg}
                      className="text-black font-arial font-bold px-2 drop-shadow-md bg-gray-200 py-1 rounded-md mt-5"
                    >
                      Remove Image
                    </button>
                  )}
                </div>
                <div className="flex flex-row justify-start mt-3 items-center">
                  <span className="font-semibold font-arial mr-4">
                    Placement
                  </span>
                  <div className="flex flex-row items-center text-4xl gap-1">
                    <button type="button" onClick={hadleAlignleft}>
                      <TbAlignBoxLeftMiddleFilled />
                    </button>
                    <button type="button" onClick={hadleAlignRight}>
                      <TbAlignBoxRightMiddleFilled />
                    </button>
                  </div>
                </div>
              </>
            )}

            <div className="flex flex-row justify-evenly gap-2">
              <div>
                <button
                  className="bg-gray-300 hover:bg-gray-400 transition-all duration-500 p-2 rounded-md mt-5 w-44"
                  onClick={handleSave}
                  type="button"
                >
                  Save
                </button>
              </div>
              <div>
                <button
                  className="bg-gray-100 text-red-400 font-bold p-2 rounded-md mt-5 w-44 hover:bg-gray-200 transition-all duration-500"
                  onClick={handleDiscard}
                  type="button"
                >
                  Discard
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Welcome;
