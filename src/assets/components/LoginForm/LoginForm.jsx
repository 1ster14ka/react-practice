import { useId, useState } from "react";

const LoginForm = ({ onLogin }) => {
  const loginId = useId();
  const passwordId = useId();
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // const form = event.target;

    // const { login, password } = form.elements;
    // onLogin({ login: login.value, password: password.value });
    // console.log(login, password);
    // console.log(login.value, password.value);
    // form.reset();
    console.log(values);
    setValues({ login: "", password: "" });
  };

  const handleChange = (evt) => {
    setValues((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={loginId}>Login</label>
        <input
          type="text"
          name="login"
          id={loginId}
          value={values.login}
          onChange={handleChange}
        />
        <label htmlFor={passwordId}>Password</label>
        <input
          type="password"
          name="password"
          id={passwordId}
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
