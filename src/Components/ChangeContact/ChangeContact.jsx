import { useState } from "react";
import { useUpdateContactMutation } from "../../redux/contacts/contacts";
import * as CS from './changeContact.styled'

export const ChangeContact = ({contactName, contactEmail, phone, id}) => {
  const [name, setName] = useState(contactName);
  const [email, setEmail] = useState(contactEmail);
  const [phoneNumber, setPhoneNumber] = useState(phone);
  const [changeContact] = useUpdateContactMutation()
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    await changeContact ({
      name,
      email,
      phone: phoneNumber,
      id,
    })
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
        <CS.Button type="submit">Save</CS.Button>
      </CS.Form>
    </>
  );
};
