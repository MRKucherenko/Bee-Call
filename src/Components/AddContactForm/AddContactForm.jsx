import { useState } from "react";
import {
  useAddContactMutation,
  useGetAllContactsQuery,
} from "../../redux/contacts/contacts";
import * as CS from './addContactform.styled'

export const AddContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addContact] = useAddContactMutation();
  const { data } = useGetAllContactsQuery();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = data?.data.find((element) => element.name === name);
    if (result) {
      alert("Change name");
    }

    await addContact({
      name,
      email,
      phone: phoneNumber,
    });
    setName("");
    setEmail("");
    setPhoneNumber("");
  };

  const handleClick = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case "name":
        setName(value);
        return;

      case "email":
        setEmail(value);
        return;

      case "phoneNumber":
        setPhoneNumber(value);
        return;

      default:
        return;
    }
  };
  return (
    <>
      <CS.Form onSubmit={handleSubmit}>
        <CS.Label>
          Name
          <CS.Input
            type="text" 
            value={name} 
            name="name" 
            onChange={handleClick} 
          />
        </CS.Label>
        <CS.Label>
          Email
          <CS.Input
            type="text"
            value={email}
            name="email"
            onChange={handleClick}
          />
        </CS.Label>
        <CS.Label>
          Phone Number
          <CS.Input
            type="text"
            value={phoneNumber}
            name="phoneNumber"
            onChange={handleClick}
          />
        </CS.Label>
        <CS.Button type="sumbit">Add</CS.Button>
      </CS.Form>
    </>
  );
};
