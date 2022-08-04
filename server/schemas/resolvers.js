// const { AuthenticationError } = require('apollo-server-express');
const { User} = require('../models');


const resolvers = {
    Query: {
        users: async () => {
            return await User.find()
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password')
            //   .populate('friends')
            //   .populate('thoughts');
          },
        
    }
}


module.exports = resolvers;
