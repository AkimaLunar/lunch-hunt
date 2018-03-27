import gql from 'graphql-tag';

export const appErrors = {
  __typename: 'AppErrors',
  hasErrored: false,
  message: null,
  info: null
}

export const getErrors = gql`
  query AppErrors {
    appErrors @client {
      hasErrored
      message
      info
    }
  }
`
export const updateErrors = gql`
  mutation UpdateErrors($hasErrored: Boolean) {
    updateErrors(hasErrored: $hasErrored) @client
  }
`

export default {
  updateErrors: (_, args, { cache }) => {
    const { hasErrored } = args;
    const appErrors = {
      __typename: 'AppErrors',
      hasErrored,
      message: null,
      info: null
    }
    cache.writeData({ data: { appErrors }})
    return appErrors;
  },
}