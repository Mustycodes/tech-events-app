import { ChangeEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import FloatingLabelInput from "../components/FloatingLabelInput";
import TextInputFieldWithLabel from "../components/TextInputFieldWithLabel";
const ProfilePage = () => {
  const history = useHistory();
  const [state, setState] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  return (
    <div>
       <h1 className="heading-one">Edit Your Profile</h1>
      <hr className="mb-8" />
      <form action="" className="w-full md:max-w-sm text-right">
          {/* <span className="italic inline-block border text-right text-sm text-red-400">Email is required</span>
        <FloatingLabelInput>
          <TextInputFieldWithLabel
            id="email"
            type="email"
            isFieldActive={isFieldActive.email}
            label="E-mail"
            value={state.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FloatingLabelInput>
        <span className="italic text-right text-sm text-red-400">Password is required</span>
        <FloatingLabelInput>
          <TextInputFieldWithLabel
            id="password"
            type="password"
            isFieldActive={isFieldActive.password}
            label="Password"
            value={state.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FloatingLabelInput> */}
        
      </form>
    </div>
  )
}

export default ProfilePage
