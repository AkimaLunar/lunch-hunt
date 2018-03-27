import gql from 'graphql-tag';

export const vote = gql`
  mutation Vote($linkId: ID!) {
    vote(linkId: $linkId) {
      id
    }
  }
`
