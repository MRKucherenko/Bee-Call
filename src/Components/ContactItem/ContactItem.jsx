import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { ChangeContact } from "../ChangeContact/ChangeContact";
import { useDeleteContactMutation } from "../../redux/contacts/contacts";
import * as CS from "./contactItem.styled";

export const ContactItem = ({ name, email, phone, id }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [deleteContact] = useDeleteContactMutation();

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <CS.Card key={id}>
      <CS.Name>{name}</CS.Name>
      <CS.Info>{phone}</CS.Info>
      <CS.Info>{email}</CS.Info>
      <CS.ButtonWrap>
        <CS.Button onClick={toggleModal}>Change Contact</CS.Button>
        {isOpenModal && (
          <Modal toggleModal={toggleModal}>
            <ChangeContact
              contactName={name}
              contactEmail={email}
              phone={phone}
              id={id}
            />
          </Modal>
        )}
        <CS.Button type="button" onClick={() => deleteContact(id)}>
          Delete
        </CS.Button>
      </CS.ButtonWrap>
    </CS.Card>
  );
};
