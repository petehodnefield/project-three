const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        username: String!
        password: String!
        email: String!,
        organization: String!
    }

    type Culture {
        _id: ID
        cultureName: String
    }
   
    type Event {
        _id: ID
        name: String
        description: String
        date: String
      }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        users: [User]
        culture(username: String) :[Culture]
        user(username: String!): User
        events: [Event]
        event(_id: ID!): Event
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!, organization: String!): Auth
        login(email: String!, password: String!): Auth

    }
`

module.exports = typeDefs;
