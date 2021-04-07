import { ChangeEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import FloatingLabelInput from "../components/FloatingLabelInput";
import TextInputFieldWithLabel from "../components/TextInputFieldWithLabel";

export interface LoginState {
  email: string;
  password: string;
  isEmailActive: boolean;
  isPasswordActive: boolean;
}

const LoginPage = () => {
  const history = useHistory();
  const [state, setState] = useState<LoginState>({
    email: "",
    password: "",
    isEmailActive: false,
    isPasswordActive: false,
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setState({ ...state, [name]: value });
  };
  const handleBlur = () => {
    if (state.email && state.password) {
      setState({ ...state, isEmailActive: true, isPasswordActive: true });
    } else if (state.email && !state.password) {
      setState({ ...state, isEmailActive: true, isPasswordActive: false });
    } else if (state.password && !state.email) {
      setState({ ...state, isPasswordActive: true, isEmailActive: false });
    } else {
      setState({ ...state, isPasswordActive: false, isEmailActive: false });
    }
  };
  return (
    <div>
      <h1 className="heading-one">Log In</h1>
      <hr className="mb-8" />
      <form action="" className="w-full md:max-w-sm text-right">
        <span className="italic inline-block text-right text-sm text-red-400">
          Email is required
        </span>
        <FloatingLabelInput>
          <TextInputFieldWithLabel
            id="email"
            type="email"
            isFieldActive={state.isEmailActive}
            label="E-mail"
            value={state.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FloatingLabelInput>
        <span className="italic text-right text-sm text-red-400">
          Password is required
        </span>
        <FloatingLabelInput>
          <TextInputFieldWithLabel
            id="password"
            type="password"
            isFieldActive={state.isPasswordActive}
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
