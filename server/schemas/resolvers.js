// const { AuthenticationError } = require('apollo-server-express');
const { User} = require('../models');


const resolvers = {
    Query: {
        users: async () => {
            return await User.find()
        },
    },
    // added reaction to resolvers
    addReaction: async (parent, { eventId, reactionBody }, context) => {
        if (context.user) {
          const updatedEvent = await Event.findOneAndUpdate(
            { _id: eventId },
            { $push: { reactions: { reactionBody, username: context.user.username } } },
            { new: true, runValidators: true }
          );
  
          return updatedEvent;
        }
  
        throw new AuthenticationError('You need to be logged in!');
      },
}


module.exports = resolvers;
