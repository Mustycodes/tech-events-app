import { ChangeEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import FloatingLabelInput from "../components/FloatingLabelInput";
import TextInputFieldWithLabel from "../components/TextInputFieldWithLabel";
const ProfilePage = () => {
  const history = useHistory();
  
  return (
    <div>
       <h1 className="heading-one">Edit Your Profile</h1>
      <hr className="mb-8" />
      <form>
        
      <div className="flex mb-4">
          <button
            className=" flex-1 mr-2 bg-purple-800 hover:bg-purple-600 px-4 py-2 inline-block"
            type="submit"
          >
            Log In
          </button>
          <button
            onClick={() => history.push("/events")}
            className=" flex-1 ml-2 bg-gray-800 w-1/3 hover:bg-gray-600 px-4 py-2 inline-block"
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProfilePage
