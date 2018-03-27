// export const resolver = (root, args, context, info) => {}
// root:     initial value for the resolver chain;
// args:     input arguments for the query, context, info);
// context:  custom data passed through the resolver chain;
// info:     AST of the query and information about where the
//           execution in the resolver chain currently is;

function feed(root, args, context, info) {
  const { filter, first, skip } = args
  const { db } = context
  const where = filter
    ? { OR: [{ url_contains: filter }, { title_contains: filter }] }
    : {}
  return db.query.links({ first, skip, where, orderBy: 'createdAt_DESC' }, info)
}

function userById(root, args, context, info) {
  const { userId } = args
  const { db } = context
  const where = { id: userId }
  return db.query.user({ where }, info)
}

function comments(root, args, context, info) {
  const { linkId } = args
  const { db } = context
  const where = { link: { id: linkId } }
  return db.query.comments({ where }, info)
}

function votes(root, args, context, info) {
  const { linkId } = args
  const { db } = context
  const where = { link: { id: linkId } }
  return db.query.votes({ where }, info)
}

module.exports = {
  feed,
  userById,
  comments,
  votes
}
