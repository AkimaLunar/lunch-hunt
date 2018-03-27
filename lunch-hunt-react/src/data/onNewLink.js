import gql from 'graphql-tag';

export const onNewLink = gql`
Subscription OnNewLink {
  newLink {
    node {
      id
      title
      url
      postedBy {
        username
        color
      }
      votes {
        user {
          username
        }
      }
      comments {
        id
        text
        postedBy {
          username
          color
        }
      }
    }
  }
}
`