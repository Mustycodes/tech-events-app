import { ChangeEvent, SyntheticEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import FloatingLabelInput from "../components/FloatingLabelInput";
import TextInputFieldWithLabel from "../components/TextInputFieldWithLabel";

export interface User {
  email: string;
  password: string;
}

export interface ActiveState {
  isEmailActive: boolean;
  isPasswordActive: boolean;
}

function LoginPage() {
  const history = useHistory();
  const [state, setState] = useState<User>({
    email: "",
    password: ""
  });
  const [activeState, setActiveState] = useState<ActiveState>({
    isEmailActive: false,
    isPasswordActive: false,
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleBlur = () => {
    if (state.email && state.password) {
      setActiveState({isEmailActive: true, isPasswordActive: true });
    } else if (state.email && !state.password) {
      setActiveState({isEmailActive: true, isPasswordActive: false });
    } else if (state.password && !state.email) {
      setActiveState({isPasswordActive: true, isEmailActive: false });
    } else {
      setActiveState({isPasswordActive: false, isEmailActive: false });
    }
  };
  const  validate = (user:any) => {
    const errors = {};
    if (!user.email.trim()) {
      (errors as any).email = "Email is required";
    } 
    if (!user.password.trim()) {
      (errors as any).password = "Password is required";
    } 
    return errors;
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const user:User = {...state};
    const fieldErrorMsg = validate(user);
    setFieldErrors(fieldErrorMsg);
    // check if there are errors available
    // if yes jump out of function
    if (Object.keys(fieldErrorMsg).length) return;
    setState({email: "", password: ""});
    history.push("/events");
  }
  return (
    <div>
      <h1 className="heading-one">Log In</h1>
      <hr className="mb-8" />
      <form action="" onSubmit={handleSubmit} className="w-full md:max-w-sm text-right">
        <span className="italic inline-block text-right text-sm text-red-400">
          {(fieldErrors as any).email }
        </span>
        <FloatingLabelInput>
          <TextInputFieldWithLabel
            id="email"
            type="email"
            isFieldActive={activeState.isEmailActive}
            label="E-mail"
            value={state.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FloatingLabelInput>
        <span className="italic inline-block text-right text-sm text-red-400">
        {(fieldErrors as any).password }
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
        <div className="text-left">
          <Link
            to="/forgotPassword"
            className="mr-2 underline hover:text-purple-600"
          >
            Forgot Password?
          </Link>
          <Link
            to="/signup"
            className="uppercase font-bold text-purple-700 hover:text-purple-500"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
