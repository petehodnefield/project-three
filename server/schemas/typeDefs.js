const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        username: String
    }

    type Event {
        _id: ID
        name: String
        description: String
        date: Int
      }

    type Query {
        users: User
        events(name: String): [Event]
        event(_id: ID!): Event
    }
`

module.exports = typeDefs;
