import { useState } from "react";
import FormField from "./FormField";
import { apiCaller } from "../utility/apiCaller";
import { useAuth } from "../utility/AuthContext";

const formPropsArr = [
  {
    id: "1",
    name: "username",
    type: "text",
    placeholder: "Username",
    errorMessage: "Incorrect Username or Password!",
    label: "Username",
    required: true,
  },
  {
    id: "2",
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage: "Incorrect Username or Password!",
    label: "Password",
    required: true,
  },
];

function Login() {
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });
  const {login} = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    apiCaller({ type: "POST", endpoint: "/api/auth/login", payload: { username: loginValues.username, password: loginValues.password } }).then(res =>login(res))
    .finally(()=>setLoginValues({ username: "", password: ""}))
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-full flex flex-col justify-center items-center p-3 space-y-8">
      <h1 className="font-bold text-4xl">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md">
        {formPropsArr.map((formProps) => (
          <FormField key={formProps.id} {...formProps} onChange={onChange} />
        ))}
        <button className="mt-4 p-2 border border-black rounded" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;

// Saving for register component --->>

// {
//     id: 1,
//     name: "username",
//     type: "text",
//     placeholder: "Username",
//     errorMessage:
//       "Username should be 3-16 characters and shouldn't include any special character!",
//     label: "Username",
//     pattern: "^[A-Za-z0-9]{3,16}$",
//     required: true,
//   },

// {
//     id: 5,
//     name: "confirmPassword",
//     type: "password",
//     placeholder: "Confirm Password",
//     errorMessage: "Passwords don't match!",
//     label: "Confirm Password",
//     pattern: values.password,
//     required: true,
//   },

// {
//     id: 2,
//     name: "password",
//     type: "password",
//     placeholder: "Password",
//     errorMessage:
//       "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
//     label: "Password",
//     pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
//     required: true,
//   },
