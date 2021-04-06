import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import FloatingLabelInput from "../components/FloatingLabelInput";
import TextInputFieldWithLabel from "../components/TextInputFieldWithLabel";

const LoginPage = () => {
  const [state, setState] = useState<{email:string, password:string}>({
    email: '',
    password: ''
  });
  const [isFieldActive, setIsFieldActive] = useState({
    email: false,
    password: false
  });
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {name, value } = e.target;
    setState({...state, [name]:value} as any);
    // if (state.email !== "") {
    //   setIsFieldActive({...isFieldActive, email: true});
    // } else {
    //   setIsFieldActive({...isFieldActive, email: false});
    // }
    // if (state.password !== "") {
    //   setIsFieldActive({...isFieldActive, password:true})
    // } else {
    //   setIsFieldActive({...isFieldActive, password:false})
    // }
    // state.email ? setIsFieldActive({...isfieldActive, isEmail:true}) : setIsFieldActive({...isfieldActive, isEmail:false});
    // state.password ? setIsFieldActive({...isfieldActive, isPassword:true}) : setIsFieldActive({...isfieldActive, isPassword:false});
  };
  return (
    <div>
      <h1 className="heading-one">Log In</h1>
      <hr className="mb-8" />
      <form action="" className="w-full md:max-w-sm">
        <FloatingLabelInput>
            <TextInputFieldWithLabel id="email" type="email" isFieldActive={isFieldActive.email} label="E-mail" value={state.email} onChange={handleChange} />
        </FloatingLabelInput>
        <FloatingLabelInput>
          <TextInputFieldWithLabel id="password" type="password" isFieldActive={isFieldActive.password} label="Password" value={state.password} onChange={handleChange} />
        </FloatingLabelInput>
        <div className="flex mb-4">
          <button className=" flex-1 mr-2 bg-purple-800 hover:bg-purple-600 px-4 py-2 inline-block" type="submit">Log In</button>
          <button className=" flex-1 ml-2 bg-gray-800 w-1/3 hover:bg-gray-600 px-4 py-2 inline-block" type="button">Cancel</button>
        </div>
        <div>
          <Link to="/forgotPassword" className="mr-2 underline hover:text-purple-600">Forgot Password?</Link>
          <Link to="/signup" className="uppercase font-bold text-purple-700 hover:text-purple-500">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
