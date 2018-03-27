import gql from 'graphql-tag';

export const getFeed = gql`
query FeedQuery {
  feed {
    id
    title
    url
    postedBy {
      username
      color
    }
    comments {
      id
      text
      postedBy {
        username
        color
      }
    }
    votes {
      id
      user {
        id
      }
    }
  }
}
`
