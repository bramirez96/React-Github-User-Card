import React from "react";
import styled from "styled-components";

class SearchBar extends React.Component {
  render() {
    return (
      <StyledSearch>
        <div>
          <input type="text" placeholder="Enter username..." />
          <button>Search</button>
        </div>
      </StyledSearch>
    );
  }
}

const StyledSearch = styled.div`
  height: 15vh;
  background-color: #0C349C;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    border-radius: 50px;
    overflow: hidden;
    input, button {
      font-family: "Work Sans", sans-serif;
      padding: 2vh 20px;
    }
  }
`;

export default SearchBar;
