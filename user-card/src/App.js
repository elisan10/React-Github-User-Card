import React from "react";
import "./App.css";

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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Eli's App</h1>
          {/* <pre>{JSON.stringify()}</pre> */}
        </header>
      </div>
    );
  }
}

export default App;
