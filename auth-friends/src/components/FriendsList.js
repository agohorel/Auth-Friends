import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import FriendCard from "./FriendCard";
import { getFriends } from "../actions/getFriendsAction";

const FriendsList = ({
  loading,
  friends: friendsFromRedux,
  getFriends,
  history
}) => {
  useEffect(() => {
    getFriends();
  }, [getFriends]);

  localStorage.setItem("friends", JSON.stringify(friendsFromRedux));
  const friends = JSON.parse(localStorage.getItem("friends"));

  if (loading) {
    return (
      <Container>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          style={{ margin: "10rem auto" }}
        />
      </Container>
    );
  } else {
    return (
      <Container>
        {friends.map(friend => (
          <FriendCard
            key={friend.id}
            friend={friend}
            history={history}
          ></FriendCard>
        ))}
      </Container>
    );
  }
};

const mapStateToProps = state => {
  return {
    friends: state.friends,
    loading: state.loading
  };
};

export default connect(mapStateToProps, { getFriends })(FriendsList);

const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4rem;
`;
