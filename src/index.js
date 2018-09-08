import React, { Component, createContext } from "react";
import { render } from "react-dom";
import { css } from "react-emotion";

const { Provider, Consumer } = createContext();

const nav = css`
  display: flex;
  align-items: center;
  background: #f9f9f9;
  padding: 1em;
  img{
    border-radius: 50%;
  }
`;
const stats = css`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-family: sans-serif;
  font-weight: 400;
`;

const content = css`
  font-family: sans-serif;
  font-weight: 400;
  padding-top: 40px;
`;

const UserAvatar = ({ size }) => (
  <Consumer>
    {user => (
      <img
        className={`user-avatar ${size || ""}`}
        alt="user avatar"
        src={user.avatar}
      />
    )}
  </Consumer>
);

const UserStats = () => (
  <Consumer>
    {user => (
      <div className={user - stats}>
        <div className={stats}>
          <div>{user.name}</div>
          <div>{user.followers} Followers</div>
          <div>Following {user.following}</div>
        </div>
      </div>
    )}
  </Consumer>
);

const Nav = () => (
  <div className={nav}>
    <UserAvatar size="small" />
    <UserStats />
  </div>
);

const Content = () => (
  <div className={content}>
    Lorem ipsum dolore sit amet consectuer adiscipling.
  </div>
);

const Body = () => (
  <div className="body">
    <Content />
  </div>
);

export default class App extends Component {
  state = {
    user: {
      avatar: "https://randomuser.me/api/portraits/women/95.jpg",
      name: "Ava",
      followers: 1234,
      following: 123
    }
  };

  render() {
    const { user } = this.state;

    return (
      <div className="app">
        <Provider value={this.state.user}>
          <Nav />
          <Body />
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
