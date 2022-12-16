import React from "react";
import "../App.css";
import { useQuery, gql } from "@apollo/client";
// Components
import Login from "../components/Login";
import SignUp from "../components/SignUp";

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
  console.log(error);

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
    <>
      <header className="shadow">
        <h1 className="white big">DEI CALENDAR</h1>
      </header>
      {auth.loggedIn() ? (
        <main className="">
          <nav className="is-flex is-flex-direction-row is-justify-content-center shadow raise">
            <NavButtons isUserLoggedIn={auth.loggedIn}></NavButtons>
            {/* <QuickSearches></QuickSearches> */}
          </nav>
          <main className="is-flex is-flex-direction-column is-align-items-center">
            <h1 className="cream">ALL UPCOMING CULTURAL EVENTS</h1>
            <div className=" is-max-desktop is-flex is-flex-wrap-wrap is-justify-content-center full-width">
              {data.events.map((event) => (
                <Link to={`/events/${event._id}`}>
                  <ShortCard eventData={event}></ShortCard>
                </Link>
              ))}
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
    </>
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
