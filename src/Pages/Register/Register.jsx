import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";
import * as CS from "./register.styled";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case "name":
        setName(value);
        return;

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
      <CS.Title>Register</CS.Title>
      <CS.StyledForm onSubmit={handleSubmit}>
        <CS.Input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <CS.Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <CS.Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <CS.SubmitButton type="submit">Sign Up</CS.SubmitButton>
      </CS.StyledForm>
    </CS.FormWrap>
  );
};
