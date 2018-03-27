import gql from 'graphql-tag';

export const postLinkForm = {
  __typename: 'PostLinkForm',
  title: '',
  url: ''
}

export const getPostLinkForm = gql`
  query GetPostLinkForm {
    postLinkForm @client {
     title
     url
    }
  }
`

export const updateTitle = gql`
  mutation UpdatePostLinkTitle($title: string) {
    updatePostLinkTitle(title: $title) @client
  }
`

export const updateUrl = gql`
  mutation UpdatePostLinkUrl($url: string) {
    updatePostLinkUrl(url: $url) @client
  }
`

export default {
  updatePostLinkTitle: (_, { title }, { cache }) => {
    const query = gql`
      query GetPostLinkForm {
        postLinkForm @client {
        title
        url
        }
      }
    `
    const previous = cache.readQuery({ query });
    const postLinkForm = {
      __typename: 'PostLinkForm',
      ...previous.postLinkForm,
      title
    }
    cache.writeData({ data: { postLinkForm }})
    return null;
  },
  updatePostLinkUrl: (_, { url }, { cache }) => {
    const query = gql`
      query GetPostLinkForm {
        postLinkForm @client {
        title
        url
        }
      }
    `
    const previous = cache.readQuery({ query });
    const postLinkForm = {
      __typename: 'PostLinkForm',
      ...previous.postLinkForm,
      url
    }
    cache.writeData({ data: { postLinkForm }})
    return null;
  }
}