import React from "react";
import styled from "styled-components";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";

import { users } from "./assets/data.js";

class App extends React.Component {
  state = {
    searchField: "",
    url: "https://api.github.com/users/toendthepeace",
    users: null
  };
  componentDidMount() {
    this.fetchUser();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchField !== this.state.searchField) {
      this.setUrl(this.state.searchField);
    }
    if (prevState.url !== this.state.url) {
      this.fetchUser();
    }
  }
  setUrl = (username) => {
    this.setState({
      url: `https://api.github.com/users/${username}`
    });
  };
  fetchUser = () => {
    axios
      .get(this.state.url)
      .then((res) => {
        this.setState({
          users: [
            {
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
        alert(`Error ${err.request.status}: User Not Found`);
      });
    // this.setState({
    //   users: users
    // });
  };
  setSearch = (value) => {
    this.setState({
      searchField: value
    });
  };

  render() {
    return (
      <StyledApp className="App">
        <SearchBar setSearch={this.setSearch} />
        {this.state.users && (
          <UserList users={this.state.users} setUrl={this.setUrl} />
        )}
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #ffffcc;
`;

export default App;
