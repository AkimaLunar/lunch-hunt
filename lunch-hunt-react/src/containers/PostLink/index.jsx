import * as React from 'react';
import './style.css';
import SimpleButton from '../../components/SimpleButton';
import { graphql, compose } from 'react-apollo';
import { post } from '../../data/post';
import { getFeed } from '../../data/getFeed';
import { getPostLinkForm, updateTitle, updateUrl } from '../../state/postLinkForm';
import { closeAll } from '../../state/closeAll';

class PostLink extends React.Component {

  onPost = () => {
    const { title, url } = this.props.postLinkFormData.postLinkForm;
    this.props.post({ variables: { title, url } })
    .then(() => {
      this.props.getFeed.refetch();
      this.props.closeAll();
    })
    .catch(error => console.log(error));
  }
  
  render(){
    return (
      <main className="postLink">
        <form className="postLink__form" onSubmit={(e) => e.preventDefault()}>
          <h1 className="postLink__heading">You think you know where to eat lunch?</h1>
          <p className="postLink__description">Post below. The people will decide.</p>
          <label className="postLink__label">name of the place</label>
          <input
            className="postLink__input"
            type="text"
            value={this.props.postLinkFormData.postLinkForm.title}
            onChange={(e) => this.props.onUpdateTitle({ variables: { title: e.target.value }})}
          />
          <label className="postLink__label">url</label>
          <input className="postLink__input"
            type="text"
            value={this.props.postLinkFormData.postLinkForm.url}
            onChange={(e) => this.props.onUpdateUrl({ variables: { url: e.target.value }})}
          />
          <div className="postLink__buttonGroup">
            <SimpleButton
              light={true}
              text="close"
              onClick={this.props.closeAll}
            />
            <SimpleButton
              alt={true}
              text="Post Link"
              type="submit"
              onClick={this.onPost}
            />
          </div>
        </form>
      </main>
    )
  }
}

export default compose(
  graphql(post, { name: 'post' }),
  graphql(getFeed, { name: 'getFeed' }),
  graphql(getPostLinkForm, { name: 'postLinkFormData' }),
  graphql(updateTitle, { name: 'onUpdateTitle' }),
  graphql(updateUrl, { name: 'onUpdateUrl' }),
  graphql(closeAll, { name: 'closeAll' }),
)(PostLink);