const db = require('./connection')

const {User} = require('../models')

db.once('open', async () => {
    // Clear user data
    await User.deleteMany({});

    await User.create([
        {username: 'testuser1'},
        {username: 'testuser2'},
        {username: 'testuser3'},
        {username: 'testuser4'},
        {username: 'testuser5'}
    ])

    console.log('users seeded');

    process.exit();
})