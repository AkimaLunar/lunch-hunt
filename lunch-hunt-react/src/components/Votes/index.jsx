import * as React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Triangle from './triangle';
import { graphql } from 'react-apollo';
import { getCurrentUser } from './gql';

const Votes = ({ votes, onVote, data }) => {
  const userHasUpvoted = votes.find(el => el.user.id === data.currentUser.userId) !== undefined;
  return (
    <div className="votes">
      {data.currentUser.isLoggedIn
        ? (<button onClick={onVote} className="votes__button">
          <Triangle color={userHasUpvoted ? "#5e05b7" : "#c4c2cc"} />
          <p className="votes__count">{votes.length}</p>
        </button>)
        : (<div><Triangle color="#c4c2cc" /><p className="votes__text">{votes.length}</p></div>)
      }
    </div>
  )
}

Votes.propTypes = {
  votes: PropTypes.array,
  onVote: PropTypes.func,
};

export default graphql(getCurrentUser)(Votes);
