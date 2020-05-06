import React from "react";
import axios from "axios";
import styled from "styled-components";

import FollowerList from "./FollowerList";
import { followers } from "../assets/data";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      followers: null
    };
  }

  componentDidMount() {
    axios
      .get(this.state.user.followers)
      .then((res) => {
        this.setState({
          followers: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // this.setState({ followers: followers });
  }

  render() {
    const { name, bio, pic } = this.state.user;
    return (
      <StyledCard>
        <div className="user">
          <img src={pic} />
          <div>
            <h2>{name}</h2>
            <p>{bio}</p>
          </div>
        </div>
        {this.state.followers && <FollowerList followers={this.state.followers} />}
      </StyledCard>
    );
  }
}

const StyledCard = styled.div`
  font-family: "Work Sans", sans-serif;
  width: 80%;
  margin-top: 20px;
  padding: 5vh;
  background-color: white;
  box-shadow: 5px 5px 10px 1px black;
  border: 1px solid black;
  .user {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: stretch;
    margin-bottom: 20px;
    img {
      max-height: 20vh;
    }
    div {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-end;
      padding: 10px 15px;
      h2 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;

export default UserCard;
