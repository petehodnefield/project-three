import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { QUERY_EVENT } from "../utils/queries";
import NavButtons from "../components/NavButtons";
import auth from "../utils/auth";
import LongCard from "../components/LongCard";

const SingleEvent = (props) => {
  const { id: eventId } = useParams();

  const { loading, data } = useQuery(QUERY_EVENT, {
    variables: { ID: eventId },
  });
  const event = data?.event || [];

  console.log(data);
  return (
    <div>
      <header className="shadow">
        <h1 className="white big">DEI CALENDAR</h1>
      </header>
      <main className="columns">
        <nav className="mt-5 is-flex is-flex-direction-column column is-one-fifth">
          <NavButtons isUserLoggedIn={auth.loggedIn}></NavButtons>
          {/* <QuickSearches></QuickSearches> */}
        </nav>
        <main className="is-flex is-flex-direction-column is-align-items-center column">
          <LongCard eventData={event}></LongCard>
        </main>
      </main>
    </div>
  );
};

export default SingleEvent;
