const db = require('./connection')


const {User, Event} = require('../models')


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