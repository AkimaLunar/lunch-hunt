import * as React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import Comment from '../../components/Comment';
import CommentInput from '../../components/CommentInput';
import { graphql, compose } from 'react-apollo';
import { setCurrentLinkCommentsOpenID } from '../../state/currentLinkCommentsOpenID';
import { getComment, updateComment } from '../../state/commentForm';
import { comment } from '../../data/comment';
import { vote } from '../../data/vote';
import { getFeed } from '../../data/getFeed';

const Comments = ({ comments, value, onCommentChange, onComment }) => (
  <div className="link__comments">
    {comments.map(comment => (
      <Comment comment={comment} key={comment.id} />))}
    <CommentInput
      value={value}
      onCommentChange={onCommentChange}
      onComment={onComment} />
  </div>
)
Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  value: PropTypes.string,
  onCommentChange: PropTypes.func,
  onComment: PropTypes.func
}

Comments.defaultProps = {
  comments: []
}

class Link extends React.Component {

  onCommentChange = (comment) => {
    this.props.onCommentChange({ variables: { comment } });
  }

  onComment = () => {
    this.props.onComment({
      variables: {
        linkId: this.props.link.id,
        text: this.props.linkData.commentForm.comment,
      },

      // TODO: optimisticResponse feature
      // optimisticResponse: {
      //   __typename: "Mutation",
      //   comment: {
      //     __typename: "Comment",
      //     id: Math.round(Math.random() * -1000000),
      //     text: this.props.linkData.commentForm.comment,
      //     postedBy: {
      //       __typename: "User",
      //       username: '....',
      //       color: 'hsl(249, 6%, 57%)'
      //     }
      //   }
      // },
      // update: (cache, response) => {
      //   const data = cache.readQuery({
      //     query: linkData,
      //     variables: {
      //       linkId: this.props.link.id
      //     }
      //   });
      //   const comment = response.data.comment;
      //   data.comments.push(comment);
      //   cache.writeQuery({ query: linkData, data })
      // }
    })
      .then(({ data }) => {
        this.props.onCommentChange({ variables: { comment: '' } });
      })
      .then(() => this.props.getFeed.refetch())
      .catch(error => console.log(error));
  }

  onVote = () => {
    this.props.onVote({
      variables: {
        linkId: this.props.link.id,
      },

    })
      .then(data => console.log(data))
      .then(() => this.props.getFeed.refetch())
      .catch(error => console.log(error));
  }

  toggleOpen = () => {
    this.props.toggleOpen({
      variables: {
        linkId: this.props.link.id
      }
    })
      .catch(error => console.log(error));
  }

  render() {
    const { isOpen } = this.props;
    return (
      <div>
        <Card
          link={this.props.link}
          votes={this.props.link.votes}
          comments={this.props.link.comments}
          toggleOpen={this.toggleOpen}
          onVote={this.onVote}
        />
        {isOpen
          ? (<Comments
            comments={this.props.link.comments}
            onComment={this.onComment}
            onVote={this.onVote}
            value={this.props.linkData.commentForm.comment}
            onCommentChange={this.onCommentChange} />)
          : ''
        }
      </div>
    )
  }
}

export default compose(
  graphql(vote, { name: 'onVote' }),
  graphql(comment, { name: 'onComment' }),
  graphql(setCurrentLinkCommentsOpenID, { name: 'toggleOpen' }),
  graphql(updateComment, { name: 'onCommentChange' }),
  graphql(getFeed, { name: 'getFeed' }),
  graphql(getComment, {
    name: 'linkData',
    options: props => ({
      variables: { linkId: props.link.id }
    })
  }),
)(Link);
