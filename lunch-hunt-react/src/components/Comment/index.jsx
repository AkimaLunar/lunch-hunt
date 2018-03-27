import * as React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import Username from '../Username';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <Avatar
        username={comment.postedBy.username}
        color={comment.postedBy.color}
        size="S"/>&ensp;
      <Username username={comment.postedBy.username} color="light"/>
      <p className="comment__text">:&ensp;{comment.text}</p>
    </div>
)}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    postedBy: PropTypes.shape({
      username: PropTypes.string.isRequired,
      color: PropTypes.string
    }),
  })
};

export default Comment;