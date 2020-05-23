import React from "react";
import styled from "styled-components";

import FollowerCard from "./FollowerCard";

const FollowerList = (props) => {
  const { followers, setUrl } = props;

  return (
    <StyledList>
      <h4>Followers:</h4>
      <div>
        {followers.map((follower) => {
          return (
            <FollowerCard
              key={follower.id}
              follower={follower}
              setUrl={setUrl}
            />
          );
        })}
      </div>
    </StyledList>
  );
};

const StyledList = styled.div`
  h4 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  & > div {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
  }
`;

export default FollowerList;
