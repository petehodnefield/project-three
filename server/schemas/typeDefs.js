const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        username: String
    }

    type Culture {
        _id: ID
        cultureName: String
    }
    
    type Query {
        users: [User]
        culture(username: String) :[Culture]
    }
`

module.exports = typeDefs;
