const { AuthenticationError } = require('apollo-server-express');
const { User, Event } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find()
        },
        events: async (parent, { name }) => {
        const params = {};
        // add back once category is a model
        // if (category) {
        //     params.category = category;
        // }
        if (name) {
            params.name = {
            $regex: name
            };
        }
        return await Event.find(params).populate();
        },
        event: async (parent, { _id }) => {
            return await Event.findById(_id).populate()
        }
    }
};

module.exports = resolvers;
