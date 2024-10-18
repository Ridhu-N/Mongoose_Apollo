const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: String!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }

  type Query {
    getAllUsers: [User!]!
  }

  type Mutation {
    createUser(
      first_name: String
      last_name: String
      email: String
      password: String
    ): User
  }
`;
module.exports = typeDefs;
