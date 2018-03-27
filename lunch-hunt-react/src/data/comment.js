import gql from 'graphql-tag';

export const comment = gql`
  mutation Comment($linkId: ID!, $text: String!) {
    comment(linkId: $linkId, text: $text) {
      id
      text
      postedBy {
        username
        color
      }
    }
  }
`
