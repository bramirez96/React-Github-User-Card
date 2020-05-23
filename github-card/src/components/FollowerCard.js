import React from "react";
import styled from "styled-components";

const FollowerCard = (props) => {
  const { setUrl } = props;
  const { login, avatar_url: pic } = props.follower;
  return (
    <StyledCard
      onClick={() => {
        setUrl(login);
      }}
    >
      <img title={login} src={pic} alt="alt" />
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  cursor: pointer;
  img {
    max-height: 8vh;
  }
`;

export default FollowerCard;
