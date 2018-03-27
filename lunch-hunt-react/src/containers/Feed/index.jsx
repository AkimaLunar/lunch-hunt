import * as React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { getFeed } from '../../data/getFeed';
import { getErrors, updateErrors } from '../../state/appErrors';
import { getCurrentLinkCommentsOpenID } from '../../state/currentLinkCommentsOpenID';

import Link from '../Link';
import Loading from '../../components/Loading';

const Links = ({ feed, isOpenId }) => {
  return feed.map(link => (
    <Link link={link} key={link.id} isOpen={link.id === isOpenId} />
  ))
}

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error, info)
    this.props.updateErrors({ variables: { hasErrored: true } })
      .catch(error => console.log(error))
  }

  render() {
    if (this.state.hasError || this.props.data.error) {
      return (
        <div className="feed__error">
          <h1>Oupsie daisies!<br />Servers are down...</h1>
          <p>Check status <a href="https://lunch-hunt-node.now.sh/">here</a>.</p>
        </div>
      );
    }
    const { data } = this.props;
    return (
      <div className="feed">
        {data.loading
          ? (<Loading />)
          : (<Links feed={data.feed}
            isOpenId={this.props.isOpenData.currentLinkCommentsOpenID} />)
        }
      </div>
    )
  }
}

Feed.propTypes = {
  data: PropTypes.shape({
    feed: PropTypes.array,
  }),
  isOpenData: PropTypes.shape({
    currentLinkCommentsOpenID: PropTypes.string
  })
};

Feed.defaultProps = {
  data: {
    feed: []
  },
  isOpenData: {
    currentLinkCommentsOpenID: null
  }
}

Links.propTypes = {
  feed: PropTypes.array,
};

Links.defaultProps = {
  feed: []
}

export default compose(
  graphql(getFeed),
  graphql(updateErrors, { name: 'updateErrors' }),
  graphql(getErrors, { name: 'errorData' }),
  graphql(getCurrentLinkCommentsOpenID, { name: 'isOpenData' })
)(Feed);
