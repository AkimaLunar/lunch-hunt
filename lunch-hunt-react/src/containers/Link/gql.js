import gql from 'graphql-tag';

export const linkData = gql`
  query LinkData($linkId: ID!) {
    commentForm @client {
      comment
    }
    comments(linkId: $linkId) {
      id
      text
      postedBy {
        username
        color
      }
    }
    votes(linkId: $linkId) {
      id
      user {
        id
      }
    }
 }
`;
