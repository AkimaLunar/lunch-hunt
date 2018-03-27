# LunchHunt GraphQl Server

Deployed to [lunch-hunt-node.now.sh](lunch-hunt-node.now.sh).

## Tech Stack

- [GraphQL CLI](https://github.com/graphql-cli/graphql-cli).
- [graphql-yoga](https://github.com/graphcool/graphql-yoga) GraphQL Node server scaffolding
- [prisma](https://www.prismagraphql.com/) GraphQL database layer
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) + [JWT](https://jwt.io/) for authentication


## Deploy to Now.sh

1. Development `yarn deploy`
2. Production `now alias [id] lunch-hunt-node.now.sh`
