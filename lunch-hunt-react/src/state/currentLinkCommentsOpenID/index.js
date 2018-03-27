import gql from 'graphql-tag';

export const currentLinkCommentsOpenID = null;

export const getCurrentLinkCommentsOpenID = gql`
query GetCurrentLinkCommentsOpenID {
  currentLinkCommentsOpenID @client
}
`;

export const setCurrentLinkCommentsOpenID = gql`
 mutation SetCurrentLinkCommentsOpenID ($linkId: ID) {
   setCurrentLinkCommentsOpenID(linkId: $linkId) @client
  }
`;

export default {
  setCurrentLinkCommentsOpenID: (_, args, { cache }) => {
    const query = gql`
      query GetOpenComment {
        currentLinkCommentsOpenID @client
      }
    `;
    const previous = cache.readQuery({ query });
    const currentLinkCommentsOpenID = (args.linkId === previous.currentLinkCommentsOpenID)
      ? null
      : args.linkId;
    cache.writeData({ data: { currentLinkCommentsOpenID }})
    return null;
  }
}