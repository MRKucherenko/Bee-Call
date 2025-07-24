import * as CS from "./searchContact.styled";
import { IoIosSearch } from "react-icons/io";

export const SearchContact = ({ handelChange, search }) => {
  return (
    <CS.SearchForm>
      <CS.SearchLabel>
        <IoIosSearch />
        <CS.SearchInput
          type="text"
          value={search}
          onChange={handelChange}
          placeholder="Search"
        />
      </CS.SearchLabel>
    </CS.SearchForm>
  );
};
