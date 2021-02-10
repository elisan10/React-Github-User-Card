import React from "react";
import "./App.css";
import axios from "axios";
import Users from "./components/Users";

// API: "https://api.github.com/users/elisan10"

// What my data looks like:
// {
//   "login": "elisan10",
//   "id": 64161490,
//   "node_id": "MDQ6VXNlcjY0MTYxNDkw",
//   "avatar_url": "https://avatars.githubusercontent.com/u/64161490?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/elisan10",
//   "html_url": "https://github.com/elisan10",
//   "followers_url": "https://api.github.com/users/elisan10/followers",
//   "following_url": "https://api.github.com/users/elisan10/following{/other_user}",
//   "gists_url": "https://api.github.com/users/elisan10/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/elisan10/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/elisan10/subscriptions",
//   "organizations_url": "https://api.github.com/users/elisan10/orgs",
//   "repos_url": "https://api.github.com/users/elisan10/repos",
//   "events_url": "https://api.github.com/users/elisan10/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/elisan10/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": null,
//   "company": null,
//   "blog": "",
//   "location": "Sioux Falls, SD",
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "twitter_username": null,
//   "public_repos": 29,
//   "public_gists": 0,
//   "followers": 2,
//   "following": 1,
//   "created_at": "2020-04-22T18:21:31Z",
//   "updated_at": "2021-01-29T15:35:38Z"
// }

class App extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/elisan10")
      .then((res) => {
        console.log("This is users data", res);
        this.setState({ users: [res.data] });
      })
      .catch((err) =>
        console.log(
          "Something went wrong with your api call for user data",
          err
        )
      );
  }

  render() {
    // console.log(this.state.users);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Eli's App</h1>
          <div className="users">
            {this.state.users.map((user) => {
              // console.log(user.login);
              return <Users user={user} />;
            })}
          </div>
          {/* <pre>{JSON.stringify(this.state.users, null, 2)}</pre> */}
        </header>
      </div>
    );
  }
}

export default App;
