const { AuthenticationError } = require('apollo-server-express');
const { User, Event } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find()
        },
        events: async () => {
        return await Event.find()
        },
        event: async (parent, { _id }) => {
            return await Event.findById(_id)
        }
    }
};

module.exports = resolvers;
