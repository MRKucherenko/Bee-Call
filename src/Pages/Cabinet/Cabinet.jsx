import { useAuth } from "../../Components/Hooks/hooks";
import noPhoto from "../../utils/images/noPhoto.png";
import { useState } from "react";
import { Modal } from "../../Components/Modal/Modal";
import { ChangeUserInfo } from "../../Components/ChangeUserInfo/ChangeUserInfo";
import * as CS from './cabinet.styled'

export const Cabinet = () => {
  const { user } = useAuth();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  console.log('user', user);
  return (
    <CS.Wrapper>
      <CS.Avatar src={user.avatarUrl || noPhoto} alt={user.name} width={600} />
      <CS.Name>{user.name}</CS.Name>
      <CS.Email>{user.email}</CS.Email>
      <CS.EditButton type="button" onClick={toggleModal}>Change</CS.EditButton>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <ChangeUserInfo />
        </Modal>
      )}
    </CS.Wrapper>
  );
};
