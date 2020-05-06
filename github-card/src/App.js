import React from "react";
import styled from "styled-components";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";

import { users } from "./assets/data.js";

class App extends React.Component {
  state = {
    searchField: "",
    url: "https://api.github.com/users/ToEndThePeace",
    users: null
  };
  componentDidMount() {
    axios
      .get(this.state.url)
      .then((res) => {
        this.setState({
          users: [{
              id: res.data.id,
              login: res.data.login,
              name: res.data.name,
              pic: res.data.avatar_url,
              bio: res.data.bio,
              followers: res.data.followers_url
            }
          ]
        });
      })
      .catch((err) => {
        debugger;
      });
    // this.setState({
    //   users: users
    // });
  }
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    return (
      <StyledApp className="App">
        <SearchBar />
        {this.state.users && <UserList users={this.state.users} />}
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #FFFFCC;
`;

export default App;
