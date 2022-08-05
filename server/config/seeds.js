const db = require('./connection')

const {User} = require('../models')

db.once('open', async () => {
    // Clear user data
    await User.deleteMany({});

    await User.create([
        {username: 'testuser1', password: "password", email: "example1@gmail.com", organization: "Apple"},
        {username: 'testuser2', password: "password", email: "example2@gmail.com", organization: "Microsoft"},
        {username: 'testuser3', password: "password", email: "example3@gmail.com", organization: "Apple"},
        {username: 'testuser4', password: "password", email: "example4@gmail.com", organization: "Facebook"},
        {username: 'testuser5', password: "password", email: "example5@gmail.com", organization: "Tesla"},

    ])

    console.log('users seeded');

    process.exit();
})