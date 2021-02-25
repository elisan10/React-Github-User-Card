import React from "react";

const Followers = ({ user, follower }) => {
  return (
    <div>
      {/* <h4>{user.name}'s Followers:</h4> */}
      <p>{follower.login}</p>
      <img src={follower.avatar_url} alt="profile-pic"></img>
    </div>
  );
};

export default Followers;
