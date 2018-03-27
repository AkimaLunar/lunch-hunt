import gql from 'graphql-tag';

export const commentForm = {
  __typename: 'CommentForm',
  comment: ''
}

export const getComment = gql`
  query CommentForm {
    commentForm @client {
     comment
    }
  }
`

export const updateComment = gql`
 mutation UpdateComment ($comment: string) {
  updateComment(comment: $comment) @client
  }
`

export default {
  updateComment: (_, args, { cache }) => {
    console.log('updateComment()')
    const commentForm = {
      __typename: 'CommentForm',
      comment: args.comment
    }
    cache.writeData({ data: { commentForm } })
    return null;
  }
}
