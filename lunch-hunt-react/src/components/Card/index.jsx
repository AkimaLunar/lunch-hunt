import * as React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Votes from '../Votes';
import Avatar from '../Avatar';
import { extractHostname } from '../../utils/extractHostname';

class Card extends React.Component {
  render() {
    const { votes, comments, toggleOpen } = this.props;
    const { title, url, postedBy } = this.props.link;
    const hostname = extractHostname(url);
    return (
      <article className="card">
        <div className="card__votes">
          <Votes votes={votes} onVote={this.props.onVote} />
        </div>
        <div className="card__link">
          <div className="card__author">
            <p>{postedBy.username}</p>
            <Avatar username={postedBy.username} color={postedBy.color} size="S" />
          </div>
          <p className="card__title">{title}</p>
          <p className="card__url"><a href={url} target="_blank">{hostname}</a></p>
          <p onClick={() => { toggleOpen() }} className="card__comments">{comments.length} comments</p>
        </div>

      </article>
    )
  }
}

Card.propTypes = {
  link: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    postedBy: PropTypes.shape({
      username: PropTypes.string.isRequired,
      color: PropTypes.string
    }),
  }),
  comments: PropTypes.array,
  votes: PropTypes.array,
  toggleOpen: PropTypes.func,
  onVote: PropTypes.func
};

Card.defaultProps = {
  comments: [],
  votes: [],
}

export default Card;
