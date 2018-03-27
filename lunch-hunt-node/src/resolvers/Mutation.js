// export const resolver = (root, args, context, info) => {}
// root:     initial value for the resolver chain;
// args:     input arguments for the query, context, info);
// context:  custom data passed through the resolver chain;
// info:     AST of the query and information about where the
//           execution in the resolver chain currently is;
const { getUserColor } = require('../utils/userAvatar')
const {
  hashPassword,
  validatePassword,
  getToken,
  getUserId
} = require('../utils/authentication')

function post(root, args, context, info) {
  const { title, url } = args
  const { db } = context
  const userId = getUserId(context)
  return db.mutation.createLink({
    data: {
      title,
      url,
      postedBy: { connect: { id: userId } }
    }
  }, info)
}

async function vote(root, args, context, info) {
  const { linkId } = args
  const { db } = context
  const userId = getUserId(context)
  const linkExists = await db.exists.Vote({
    user: { id: userId },
    link: { id: linkId },
  })
  if (linkExists) {
    const existingVote = await db.query.votes({
      where: {
        user: { id: userId },
        link: { id: linkId },
      }
    });
    const id = existingVote[0].id;
    return db.mutation.deleteVote({
      where: {
        id
      }
    })
  }
  return db.mutation.createVote({
    data: {
      user: { connect: { id: userId } },
      link: { connect: { id: linkId } }
    }
  }, info)
}

async function comment(root, args, context, info) {
  const { linkId, text } = args
  const { db } = context
  const userId = getUserId(context)
  return db.mutation.createComment({
    data: {
      text,
      link: { connect: { id: linkId } },
      postedBy: { connect: { id: userId } }

    }
  }, info)
}

async function signup(root, args, context, info) {
  const { email, username } = args
  const password = await hashPassword(args.password)
  const color = getUserColor()
  const user = await context.db.mutation.createUser({
    data: {
      email,
      username,
      password,
      color
    }
  })
  const token = getToken(user.id)
  return {
    token,
    user
  }
}

async function login(root, args, context, info) {
  const { db } = context
  const user = await db.query.user({ where: { email: args.email } })
  if (!user) {
    throw new Error(`No user with email: ${args.email}`)
  }

  const valid = await validatePassword(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = getToken(user.id)

  return {
    token,
    user
  }
}

module.exports = {
  post,
  signup,
  login,
  vote,
  comment
}
