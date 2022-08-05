const { AuthenticationError } = require('apollo-server-express');

const { User, Event, Culture, Reaction} = require('../models');
const {signToken} = require('../utils/auth')


const resolvers = {
    Query: {
        users: async () => {
            return  User.find()
            .populate('reactions')

        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password')
            //   Uncomment after reactions model is added
              .populate('reactions')
          },
         events: async () => {
                return await Event.find()
         },
         event: async (parent, { _id }) => {
            return await Event.findById(_id)
        },
        reactions: async () => {
          return await Reaction.find()
        },
        // cultures: async () => {
        //   return await Culture.find()
        // }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
          addReaction: async (parent, { userId, reactionBody, username}, context) => {
            // We will need to add context here once front end is working
            // if (context.user) {

            const reaction = await Reaction.create({ reactionBody, username: username });
        
            await User.findByIdAndUpdate(
              { _id: userId },
              { $push: { reactions: reaction._id } },
              { new: true }
            );
            return reaction;

          // }
          // throw new AuthenticationError('You need to be logged in!');

          },
         
    }
 
}



module.exports = resolvers;
