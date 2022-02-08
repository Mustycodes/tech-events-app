import { ChangeEvent, SyntheticEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import FloatingLabelInput from "../components/FloatingLabelInput";
import TextInputFieldWithLabel from "../components/TextInputFieldWithLabel";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/user/actions";

export interface User {
  username: string;
  email:string;
  password: string;
  confirmPassword:string;
}

export interface ActiveState {
  isUsernameActive: boolean;
  isEmailActive:boolean;
  isPasswordActive: boolean;
  isConfirmPasswordActive:boolean;
}



function SignUpPage () {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState<User>({
    username: "",
    email:"",
    password: "",
    confirmPassword:"",
  });
  const [activeState, setActiveState] = useState<ActiveState>({
    isUsernameActive: false,
    isEmailActive:false,
    isPasswordActive: false,
    isConfirmPasswordActive:false,
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleBlur = () => {
    if (state.username && state.email && state.password && state.confirmPassword) {
      setActiveState({ isUsernameActive: true, isEmailActive:true, isPasswordActive: true, isConfirmPasswordActive:true });
    } else if (state.username && state.email && !state.password && state.confirmPassword) {
      setActiveState({ isUsernameActive: true, isEmailActive:true, isPasswordActive: false, isConfirmPasswordActive:true });
    } else if (state.password && !state.username && state.email && state.confirmPassword) {
      setActiveState({ isPasswordActive: true, isUsernameActive: false, isEmailActive:true, isConfirmPasswordActive:true });
    } else if (state.password && state.username && !state.email && state.confirmPassword) {
      setActiveState({ isPasswordActive: true, isUsernameActive: true, isEmailActive:false, isConfirmPasswordActive:true });
    } else if (state.password && state.username && state.email && !state.confirmPassword) {
      setActiveState({ isPasswordActive: true, isUsernameActive: true, isEmailActive:true, isConfirmPasswordActive:true });
    } else {
      setActiveState({ isPasswordActive: false, isUsernameActive: false, isEmailActive:false, isConfirmPasswordActive:false });
    }
  };
  const validate = (user: any) => {
    const errors = {};
    if (!user.username.trim()) {
      (errors as any).username = "Username is required";
    }
    if (!user.email.trim()) {
      (errors as any).email = "Email is required";
    }
    if (!user.password.trim()) {
      (errors as any).password = "Password is required";
    }
    if (!user.confirmPassword.trim()) {
      (errors as any).confirmPassword = "Confirm Password is required";
    }
    if (user.confirmPassword.trim() !== user.password.trim()) {
      (errors as any).confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const user: User = { ...state };
    const fieldErrorMsg = validate(user);
    setFieldErrors(fieldErrorMsg);
    // check if there are errors available
    // if yes jump out of function
    if (Object.keys(fieldErrorMsg).length) return;
    dispatch(loginUser(user));
    setState({ username: "", email:"", password: "", confirmPassword:"" });
    history.push("/events");
  };
  return (
    <div>
      <h1 className="heading-one">Log In</h1>
      <hr className="mb-8" />
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-full md:max-w-sm text-right"
        noValidate
      >
        <span className="italic inline-block text-right text-sm text-red-400">
          {(fieldErrors as any).username}
        </span>
        <FloatingLabelInput>
          <TextInputFieldWithLabel
            id="username"
            type="text"
            isFieldActive={activeState.isUsernameActive}
            label="Username"
            value={state.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FloatingLabelInput>
        <span className="italic inline-block text-right text-sm text-red-400">
          {(fieldErrors as any).email}
        </span>
        <FloatingLabelInput>
          <TextInputFieldWithLabel
            id="email"
            type="email"
            isFieldActive={activeState.isEmailActive}
            label="Email"
            value={state.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FloatingLabelInput>
        <span className="italic inline-block text-right text-sm text-red-400">
          {(fieldErrors as any).password}
        </span>
        <FloatingLabelInput>
          <TextInputFieldWithLabel
            id="password"
            type="password"
            isFieldActive={activeState.isPasswordActive}
            label="Password"
            value={state.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FloatingLabelInput>
        <span className="italic inline-block text-right text-sm text-red-400">
          {(fieldErrors as any).confirmPassword}
        </span>
        <FloatingLabelInput>
          <TextInputFieldWithLabel
            id="confirmPassword"
            type="password"
            isFieldActive={activeState.isConfirmPasswordActive}
            label="Confirm Password"
            value={state.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FloatingLabelInput>
        <div className="flex mb-4">
          <button
            className=" flex-1 mr-2 bg-purple-800 hover:bg-purple-600 px-4 py-2 inline-block"
            type="submit"
          >
            Sign up
          </button>
          <button
            onClick={() => history.push("/events")}
            className=" flex-1 ml-2 bg-gray-800 w-1/3 hover:bg-gray-600 px-4 py-2 inline-block"
            type="button"
          >
            Cancel
          </button>
        </div>
        <div className="text-left">
          <Link
            to="/forgotPassword"
            className="mr-2 underline hover:text-purple-600"
          >
            Already have an account?
          </Link>
          <Link
            to="/login"
            className="uppercase font-bold text-purple-700 hover:text-purple-500"
          >
            Log in
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignUpPage
