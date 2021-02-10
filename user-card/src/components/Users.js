import React from "react";
import axios from "axios";
import Followers from "./Followers";

//Followers data:

// {
//     login: "Playtez",
//     id: 46515085,
//     node_id: "MDQ6VXNlcjQ2NTE1MDg1",
//     avatar_url: "https://avatars.githubusercontent.com/u/46515085?v=4",
//     gravatar_id: "",
//     url: "https://api.github.com/users/Playtez",
//     html_url: "https://github.com/Playtez",
//     followers_url: "https://api.github.com/users/Playtez/followers",
//     following_url:
//       "https://api.github.com/users/Playtez/following{/other_user}",
//     gists_url: "https://api.github.com/users/Playtez/gists{/gist_id}",
//     starred_url:
//       "https://api.github.com/users/Playtez/starred{/owner}{/repo}",
//     subscriptions_url: "https://api.github.com/users/Playtez/subscriptions",
//     organizations_url: "https://api.github.com/users/Playtez/orgs",
//     repos_url: "https://api.github.com/users/Playtez/repos",
//     events_url: "https://api.github.com/users/Playtez/events{/privacy}",
//     received_events_url:
//       "https://api.github.com/users/Playtez/received_events",
//     type: "User",
//     site_admin: false,
//   },
//   {
//     login: "bkegley",
//     id: 24785958,
//     node_id: "MDQ6VXNlcjI0Nzg1OTU4",
//     avatar_url: "https://avatars.githubusercontent.com/u/24785958?v=4",
//     gravatar_id: "",
//     url: "https://api.github.com/users/bkegley",
//     html_url: "https://github.com/bkegley",
//     followers_url: "https://api.github.com/users/bkegley/followers",
//     following_url:
//       "https://api.github.com/users/bkegley/following{/other_user}",
//     gists_url: "https://api.github.com/users/bkegley/gists{/gist_id}",
//     starred_url:
//       "https://api.github.com/users/bkegley/starred{/owner}{/repo}",
//     subscriptions_url: "https://api.github.com/users/bkegley/subscriptions",
//     organizations_url: "https://api.github.com/users/bkegley/orgs",
//     repos_url: "https://api.github.com/users/bkegley/repos",
//     events_url: "https://api.github.com/users/bkegley/events{/privacy}",
//     received_events_url:
//       "https://api.github.com/users/bkegley/received_events",
//     type: "User",
//     site_admin: false,
//   },

class Users extends React.Component {
  state = {
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/elisan10/followers")
      .then((res) => {
        // console.log("This is followers data", res);
        this.setState({ followers: res.data });
      })
      .catch((err) =>
        console.log(
          "Something went wrong with your api call for followers data",
          err
        )
      );
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <h2>{user.name}'s Card</h2>
        <h3>Here are {user.name}'s Followers:</h3>
        <div className="followers">
          {this.state.followers.map((follower) => {
            return <Followers follower={follower} user={user} />;
          })}
        </div>
      </div>
    );
  }
}

export default Users;
