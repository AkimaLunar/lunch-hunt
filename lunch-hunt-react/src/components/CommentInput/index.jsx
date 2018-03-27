import * as React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import SimpleButton from '../SimpleButton';
import { graphql } from 'react-apollo';
import { isUserLoggedIn } from '../../state/currentUser';

const CommentInput = ({ value, onCommentChange, onComment, data }) => {
  if (!data.currentUser.isLoggedIn) return (
    <p className="commentInput__text">Login to comment!</p>)
  return (
    <form className="commentInput">
      <input
        type="text"
        value={value}
        onChange={(e) => onCommentChange(e.target.value)}
        placeholder="What do you think?"
        className="commentInput__input"/>
      <SimpleButton text="Comment" dark={true} onClick={onComment} />
    </form>
)}

CommentInput.propTypes = {
  value: PropTypes.string,
  onCommentChange: PropTypes.func,
  onComment: PropTypes.func
};

export default graphql(isUserLoggedIn)(CommentInput);