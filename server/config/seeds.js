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
            cultureName: 'African American'
        
        },
        {
            name: 'Orthodox New Year',
            description: 'Celebrates the “Old New Year” of the Julian calendar.',
            date: '01/14/2023',
            cultureName: 'Christian'
        },
        {
            name: 'Chinese New Year',
            description: 'Festival that celebrates the new year in the traditional lunisolar Chinese calendar.',
            date: '02/01/2023',
            cultureName: 'Asian American'
        },
        {
            name: 'Parinirvana',
            description: "Also called Nirvana Day, this date marks Buddha’s death and attainment of final nirvana",
            date: '02/15/2023',
            cultureName: 'Buddhist'
        },
        {
            name: 'Maha Shiravatri',
            description: "Hindu festival called Shiva's night honoring this significant deity.",
            date: '03/01/2023',
            cultureName: 'Hindu'
        },
        {
            name: 'Ash Wednesday',
            description: 'Marks the start of Lent in the Christian Church. Lent is the 40-day period of fasting and prayer before Easter.',
            date: '03/02/2023',
            cultureName: 'Christian'
        },
        {
            name: 'Ramadan',
            description: 'Holy month of fasting, introspection and prayer',
            date: '04/01/2023',
            cultureName: 'Muslim'
        },
        {
            name: 'Passover',
            description: '7-day holiday honoring the freeing of the Israeli slaves',
            date: '04/15/2023',
            cultureName: 'Jewish'
        },
        {
            name: 'Cinco de Mayo',
            description: "Commemorating Mexico’s defeat of the French army.",
            date: '05/05/2023',
            cultureName: 'Mexican American'
        },
        {
            name: 'Birthday of Buddha:',
            description: "Celebrating Buddha’s birthday.",
            date: '05/0"/2023',
            cultureName: 'Buddhist'
        },
        {
            name: 'Juneteenth',
            description: 'Marks the anniversary when all African Americans learned of the Emancipation Proclamation, and were free.',
            date: '06/19/2023',
            cultureName: 'African American'
        },
        {
            name: 'Shavuot',
            description: 'Combines a grand harvest and giving of the Torah on Mount Sinai',
            date: '06/04/2023',
            cultureName: 'Jewish'
        },
        {
            name: 'The Hajj',
            description: 'Annual pilgrimage to the Holy City of Mecca required for all Muslims at least once.',
            date: '07/07/2023',
            cultureName: 'Muslim'
        },
        {
            name: 'Eid al-Adha',
            description: 'Marks the end of the Hajj pilgrimage.',
            date: '07/09/2023',
            cultureName: 'Muslim'
        },
        {
            name: 'Hijiri',
            description: 'Islamic New Year according to the Islamic lunar ',
            date: '08/29/2023',
            cultureName: 'Muslim'
        },
        {
            name: 'Birth of Lord Krishna',
            description: 'Celebration of the birth of the most popular deities and celebrated with a festival. ',
            date: '08/18/2023',
            cultureName: 'Hindu'
        },
        {
            name: 'Pitru Paksha',
            description: 'When Hindus pay homage to their ancestors',
            date: '09/10/2023',
            cultureName: 'Hindu'
        },
        {
            name: 'Coptic New Year',
            description: 'Feast day that commemorates both martyrs and confessors in the Coptic Orthodox Christian Church',
            date: '09/11/2023',
            cultureName: 'Christian'
        },
        {
            name: "Indigenous Peoples’ Day",
            description: 'Honoring the indigenous people of North America',
            date: '10/10/2023',
            cultureName: 'Native American'
        },
        {
            name: 'Yom Kippur',
            description: 'Day of atonement to reflect on sins and seek forgiveness from God.',
            date: '10/04/2023',
            cultureName: 'Jewish'
        },
        {
            name: 'All Saints Day',
            description: 'AKA Dia de los Muertos or Day of the dead, a day to honor the people who have gone to heaven',
            date: '11/01/2023',
            cultureName: 'Mexican American'
        },
        {
            name: 'Kwanzaa',
            description: '8-day holiday inspired by African harvest celebrations. ',
            date: '12/26/2023',
            cultureName: 'African American'
        },
        {
            name: 'Christmas',
            description: 'Celebration of the birth of Jesus Christ',
            date: '12/25/2023',
            cultureName: 'Christian'
        },
        {
            name: 'Hanukkah',
            description: '8-day celebration of the “Festival of Lights” honoring the victory of the Jews over Syrian Greeks.',
            date: '12/18/2023',
            cultureName: 'Jewish'
        }
    ]);


    console.log('users seeded');

    process.exit();
})