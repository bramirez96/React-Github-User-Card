import React from "react";
import useForm from "../hooks/useForm";
import styled from "styled-components";

const SearchBar = (props) => {
  const { setSearch } = props;
  const [values, handleChanges, clearForm] = useForm({
    searchField: ""
  });
  const submitForm = (e) => {
    e.preventDefault();
    setSearch(values.searchField);
    clearForm();
  };
  return (
    <StyledSearch>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="searchField"
          placeholder="Enter username..."
          value={values.searchField}
          onChange={handleChanges}
        />
        <button>Search</button>
      </form>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  height: 15vh;
  background-color: #0c349c;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    border-radius: 50px;
    overflow: hidden;
    input,
    button {
      font-family: "Work Sans", sans-serif;
      padding: 2vh 20px;
    }
  }
`;

export default SearchBar;
