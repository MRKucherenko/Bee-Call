import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authOperations";
import * as CS from './login.styled'

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        return;

      case "password":
        setPassword(value);
        return;

      default:
        return;
    }
  };
  return (
    <CS.FormWrap>
      <CS.Title>Login</CS.Title>
      <CS.StyledForm onSubmit={handleSubmit}>
        <CS.Input 
          type="email" 
          name="email" 
          placeholder="Email" 
          required
          onChange={handleChange}
        />
        <CS.Input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <CS.SubmitButton type="submit">Sign In</CS.SubmitButton>
      </CS.StyledForm>
    </CS.FormWrap>
  );
};
