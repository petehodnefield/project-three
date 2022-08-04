const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        username: String
    }
    
    type Query {
        users: [User]
    }
    type Reaction {
        _id: ID
        reactionBody: String
        createdAt: String
        username: String
      }
`

module.exports = typeDefs;
