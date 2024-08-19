import { useState } from "react";
import FormField from "./FormField";
import { apiCaller } from "../utility/apiCaller";
import { useNavigate } from "react-router-dom";

function Register() {
  const [registerValues, setRegisterValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const formPropsArr = [
    {
      id: "1",
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: "2",
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: "3",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: registerValues.password,
      required: true,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    apiCaller({ type: "POST", endpoint: "/api/auth/register", payload: { username: registerValues.username, password: registerValues.password } }).then(res=>{
      if(res===""){
        setError("Redirecting to login in 3 seconds...");
        setTimeout(() => {
          navigate("/login")
        }, 3000);
      } else{
        setError(res);
      }
    })
    .finally(()=>setRegisterValues({ username: "", password: "", confirmPassword: "" }))
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterValues({ ...registerValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-full flex flex-col justify-center items-center p-3 space-y-8">
      <h1 className="font-bold text-4xl">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md">
        {formPropsArr.map((formProps) => (
          <FormField key={formProps.id} {...formProps} onChange={onChange} />
        ))}
        <button className="mt-4 p-2 border border-black rounded" type="submit">Submit</button>
      </form>
        {error && <p className="text-red-600 font-semibold text-sm">{error}</p>}
    </div>
  );
}

export default Register;
