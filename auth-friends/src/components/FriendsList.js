import React, { useEffect } from "react";
import { connect } from "react-redux";

import FriendCard from "./FriendCard";
import { getFriends } from "../actions/getFriendsAction";

const FriendsList = ({ friends, getFriends }) => {
  useEffect(() => {
    getFriends();
  }, [getFriends, friends]);

  return (
    <>
      {friends.map(friend => (
        <FriendCard key={friend.id} friend={friend}></FriendCard>
      ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { getFriends })(FriendsList);
