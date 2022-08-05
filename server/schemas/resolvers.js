// const { AuthenticationError } = require('apollo-server-express');
const { User, Culture} = require('../models');


const resolvers = {
    Query: {
        users: async () => {
            return await User.find()
        },
    }
}


module.exports = resolvers;
