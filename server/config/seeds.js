const db = require('./connection')

const {User, Event} = require('../models')

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

    await Event.deleteMany({});

    await Event.insertMany([
        {
            name: 'Martin Luther King Jr. Day',
            description: 'Celebrating and honoring MLK Jr. who was a revered American civil rights movement leader.',
            date: '01/17/2023',
        
        },
        {
            name: 'asdfas',
            description: 'Celesadindah ;sdj flkdsa lk;s dlkdsflksajksf sda.',
            date: '04/11/2023',
            
        }
    ]);

    console.log('users seeded');

    process.exit();
})