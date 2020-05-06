import React from "react";
import styled from "styled-components";

const FollowerCard = (props) => {
  const { url, login, avatar_url: pic } = props.follower;
  return (
    <StyledCard>
      <a href={url}>
        <img title={login} src={pic} alt="alt" />
      </a>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  img {
    max-height: 8vh;
  }
`;

export default FollowerCard;
