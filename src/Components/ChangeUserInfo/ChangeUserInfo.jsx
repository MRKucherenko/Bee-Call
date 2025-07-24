import { useState } from "react";
import { useAuth } from "../Hooks/hooks";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../redux/auth/authOperations";
import * as CS from './changeUserInfo.styled'

export const ChangeUserInfo = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const [addFile, setAddFile] = useState(user.avatarUrl);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    console.log(files[0]);
    switch (name) {
      case "addFile":
        setAddFile(files[0]);
        return;

      case "name":
        setName(value);
        return;

      case "email":
        setEmail(value);
        return;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("avatar", addFile);

    dispatch(updateUserInfo(formData));
  };
  return (
    <CS.Form onSubmit={handleSubmit}>
      <CS.Label>
        Add Images
        <CS.Input
          accept="image/*, .png, .jpg, .jpeg, .webp"
          type="file"
          name="addFile"
          onChange={handleChange}
        />
      </CS.Label>
      <CS.Label>
        Name
        <CS.Input type="text" value={name} name="name" onChange={handleChange} />
      </CS.Label>
      <CS.Label>
        Email
        <CS.Input type="text" value={email} name="email" onChange={handleChange} />
      </CS.Label>
      <CS.Button type="submit">Save</CS.Button>
    </CS.Form>
  );
};
