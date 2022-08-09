import React from "react";
import "../App.css";
import { useQuery, gql } from "@apollo/client";
// Components
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import LongCard from "../components/LongCard";
import ShortCard from "../components/ShortCard";
import ColleaguesList from "../components/ColleaguesList";
import ColleaguesSearch from "../components/ColleaguesSearch";
import QuickSearches from "../components/QuickSearches";
import NavButtons from "../components/NavButtons";
import auth from "../utils/auth";

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

  // function renderLogin(testUserLoggedIn) {
  //   if (testUserLoggedIn) {
  //     return (<>
  //       <Login></Login>
  //       <SignUp></SignUp>
  //     </>)
  //   } else {
  //     return <></>
  //   }
  // }

  console.log(data);

  return (
    <div>
      <header>
        <h1 className="white big">DEI CALENDAR</h1>
      </header>
      {auth.loggedIn() ? (
        <main className="columns">
          <nav className="m-0 p-0 container is-flex is-flex-direction-column is-align-items-center column is-one-quarter">
            <NavButtons></NavButtons>
            <QuickSearches></QuickSearches>
          </nav>
          <main className="container is-flex is-flex-direction-column is-align-items-center">
            <h1 className="cream">UPCOMING CULTURAL EVENTS</h1>
            <div>
              <LongCard></LongCard>
              <ShortCard></ShortCard>
              <div>
                {data.events.map((event) => (
                  <div className="short-card full-width">
                    <div className="p-2">
                      <h1 className="p-0 big white">{event.date}</h1>
                    </div>
                    <div className="p-3 is-flex is-flex-direction-column is-align-items-center cream-back">
                      <h1>{event.name}</h1>
                      <h3 className="m-2 culture-tag raise">{event.culture}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </main>
      ) : (
        <div>
          <Login></Login>
          <SignUp></SignUp>
        </div>
      )}
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
