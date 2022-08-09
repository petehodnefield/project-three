import React from 'react';
import '../App.css';
import { useQuery, gql } from '@apollo/client';
// Components
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import LongCard from "../components/LongCard";
import ShortCard from "../components/ShortCard";
import ColleaguesList from '../components/ColleaguesList';
import ColleaguesSearch from '../components/ColleaguesSearch';
import QuickSearches from '../components/QuickSearches';
import NavButtons from '../components/NavButtons';

const GET_EVENTS = gql`
query events {
  events {
    date
    name
    description
   culture
    _id
  }
 }
`;

function Home() {

  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( WOE!!!</p>;



  function renderLogin(testUserLoggedIn) {
    if (testUserLoggedIn) {
      return (<>
        <Login></Login>
        <SignUp></SignUp>
      </>)
    } else {
      return <></>
    }
  }

  console.log(data);

  return (
    <div>
      <header>
        <h1 className="white big">DEI CALENDAR</h1>
      </header>

      <main className="columns">
        <nav className="m-0 p-0 container is-flex is-flex-direction-column is-align-items-center column is-one-quarter">
          <NavButtons isUserLoggedIn={false} iLoveCake={true}></NavButtons>
          <QuickSearches></QuickSearches>
        </nav>
        <main className="container is-flex is-flex-direction-column is-align-items-center">
          <h1 className="cream">UPCOMING CULTURAL EVENTS</h1>
          <LongCard></LongCard>
          <ShortCard></ShortCard>
          {renderLogin(false)}
        </main>
      </main>
    </div>
  );
}


// client
//   .query({
//     query: gql`
//       query GetLocations {
//         locations {
//           id
//           name
//           description
//           photo
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

export default Home;
