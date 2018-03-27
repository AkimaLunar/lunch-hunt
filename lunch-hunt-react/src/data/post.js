import gql from 'graphql-tag';

export const post = gql`
  mutation Post($title: String!, $url: String!) {
    post(title:$title, url:$url) {
      id
    }
  }
`