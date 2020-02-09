import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { deleteFriend } from "../actions/deleteFriendAction";
import { selectFriendToEdit } from "../actions/editFriendAction";

const FriendCard = ({ friend, deleteFriend, selectFriendToEdit, history }) => {
  const handleEdit = friend => {
    selectFriendToEdit(friend);
    history.push("/edit-friend");
  };

  return (
    <Card>
      <h3>{friend.name}</h3>
      <p>{friend.age} years old</p>
      <p>{friend.email}</p>
      <Btn onClick={() => handleEdit(friend)}>edit</Btn>
      <Btn onClick={() => deleteFriend(friend.id)} color="red">
        delete
      </Btn>
    </Card>
  );
};

export default connect(undefined, { deleteFriend, selectFriendToEdit })(
  FriendCard
);

const Card = styled.div`
  display: inline-block;
  background-color: #1c1c1c;
  padding: 2rem;
  border-radius: 3px;
  width: calc(33% - 4rem);
  margin: 2rem;
  color: #eee;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);

  * {
    margin: 0.5rem;
  }
`;

const Btn = styled.button`
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  background-color: ${props => (props.color === "red" ? "#BD2008" : "#3c3c3c")};
  color: #eee;

  :hover {
    cursor: pointer;
    background-color: #4c4c4c;
    color: #fff;
  }
`;
