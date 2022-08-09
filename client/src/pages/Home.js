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
import { Link } from "react-router-dom";
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
            <NavButtons isUserLoggedIn={auth.loggedIn}></NavButtons>
            {/* <QuickSearches></QuickSearches> */}
          </nav>
          <main className="container is-flex is-flex-direction-column is-align-items-center">
            <h1 className="cream">UPCOMING CULTURAL EVENTS</h1>
            <div>
              <LongCard></LongCard>
              <ShortCard></ShortCard>
              <div>
                {data.events.map((event) => (
                  <Link to={`/events/${event._id}`}>
                    <div className="short-card full-width">
                      <div className="p-2">
                        <h1 className="p-0 big white">{event.date}</h1>
                      </div>
                      <div className="p-3 is-flex is-flex-direction-column is-align-items-center cream-back">
                        <h1>{event.name}</h1>
                        <h3 className="m-2 culture-tag raise">
                          {event.culture}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </main>
        </main>
      ) : (
        <div className="hero is-fullheight">
          <div className="hero-body is-justify-content-center is-align-items-center">
            <div className="is-flex is-flex-direction-column	is-justify-content-center is-align-items-center">
              <Login className="mb-4"></Login>
              <SignUp></SignUp>
            </div>
          </div>
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
