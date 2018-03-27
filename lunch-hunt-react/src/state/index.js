import appErrorsMutation, { appErrors } from './appErrors';
import commentFormMutation, { commentForm } from './commentForm';
import currentLinkCommentsOpenIDMutation, { currentLinkCommentsOpenID } from './currentLinkCommentsOpenID';
import currentUserMutation, { currentUser } from './currentUser';
import loginFormMutation, { loginForm } from './loginForm';
import loginIsOpenMutation, { loginIsOpen } from './loginIsOpen';
import postLinkIsOpenMutation, { postLinkIsOpen } from './postLinkIsOpen';
import postLinkMutation, { postLinkForm } from './postLinkForm';
import signupFormMutation, { signupForm } from './signupForm';
import signupIsOpenMutation, { signupIsOpen } from './signupIsOpen';

import closeAllMutation from './closeAll';

export const defaults = {
  appErrors,
  commentForm,
  currentLinkCommentsOpenID,
  currentUser,
  loginForm,
  loginIsOpen,
  postLinkForm,
  postLinkIsOpen,
  signupForm,
  signupIsOpen,
  networkStatus: {
    __typename: 'NetworkStatus',
    isConnected: false,
  }
}

export const resolvers = { Mutation: {
  ...appErrorsMutation,
  ...commentFormMutation,
  ...currentLinkCommentsOpenIDMutation,
  ...currentUserMutation,
  ...loginFormMutation,
  ...loginIsOpenMutation,
  ...postLinkIsOpenMutation,
  ...postLinkMutation,
  ...signupFormMutation,
  ...signupIsOpenMutation,
  ...closeAllMutation
}};