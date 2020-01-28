import React from "react";
import { connect } from "react-redux";

import { deleteFriend } from "../actions/deleteFriendAction";

const FriendCard = ({ friend, deleteFriend }) => {
  return (
    <div>
      <h3>{friend.name}</h3>
      <p>{friend.age} years old</p>
      <p>{friend.email}</p>
      <button onClick={() => deleteFriend(friend.id)}>don't taze me bro</button>
    </div>
  );
};

export default connect(undefined, { deleteFriend })(FriendCard);
