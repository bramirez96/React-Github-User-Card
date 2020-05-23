import React from "react";
import styled from "styled-components";

import UserCard from "./UserCard";

const UserList = (props) => {
  const { users, setUrl } = props;
  return (
    <StyledList>
      {users.map((user) => {
        return <UserCard key={user.id} user={user} setUrl={setUrl} />;
      })}
    </StyledList>
  );
};

const StyledList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export default UserList;
