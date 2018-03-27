import gql from 'graphql-tag';

export const postLinkIsOpen = false;

export const getPostsIsOpen = gql`{ 
  query GetPostsIsOpen {
    postLinkIsOpen @client
  }
}`;

export const openPostLink = gql` 
  mutation OpenPostLink {
    openPostLink @client
  }
`;

export default {
  openPostLink: (_, args, { cache }) => {
    cache.writeData({ data: {
      loginIsOpen: false,
      signupIsOpen: false,
      postLinkIsOpen: true,
    }})
    return null;
  }
}