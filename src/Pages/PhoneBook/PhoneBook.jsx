import { useState } from "react";
import { AddContactForm } from "../../Components/AddContactForm/AddContactForm";
import {
  useGetAllContactsQuery,
} from "../../redux/contacts/contacts";
import { Modal } from "../../Components/Modal/Modal";
import { ContactItem } from "../../Components/ContactItem/ContactItem";
import { SearchContact } from "../../Components/SearchContact/SearchContact";
import * as CS from './phoneBook.styled'

export const PhoneBook = () => {
  const { data } = useGetAllContactsQuery();
  const [isOpenModal, setIsOpenModal] = useState(false);
   const [search, setSearch] = useState('');

  const handelChange = (event) => {
    setSearch(event.target.value)
  }

  const filterContact = data?.data?.filter((contact) => ( 
    contact?.name.toLowerCase().includes(search)
  ))
  console.log(';;;', data?.data)
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <CS.Container>
      <SearchContact search={search} handelChange={handelChange}/>
      <CS.ButtonAdd type="button" onClick={toggleModal}>
        Add Contact
      </CS.ButtonAdd>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <AddContactForm />
        </Modal>
      )}
      <CS.List>
        {filterContact?.map(({ name, _id, email, phone }) => (
          <ContactItem key={_id}
            name={name}
            id={_id}
            email={email}
            phone={phone}
          />
        ))}
      </CS.List>
    </CS.Container>
  );
};
