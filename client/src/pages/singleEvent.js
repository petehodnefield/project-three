import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { QUERY_EVENT } from "../utils/queries";

const SingleEvent = (props) => {
  const { id: eventId } = useParams();

  const { loading, data } = useQuery(QUERY_EVENT, {
    variables: { ID: eventId },
  });
  const event = data?.event || [];

  console.log(data);
  return (
    <div className="container is-flex is-flex-direction-column is-align-items-center">
      <form className="m-4 columns">
        <div className="is-flex is-flex-direction-column is-align-items-center column is-one-third long-card-header">
          <h3 className="center big">DATE:</h3>
          <div className="columns full-width dates">
            <h1 className="p-0 white big">{event.date}</h1>
          </div>
        </div>
        <div className="is-flex is-flex-direction-column is-align-items-center column">
          <h1>{event.name}</h1>

          <h3 className="m-2 culture-tag">{event.culture}</h3>
          <p className="m-3">{event.description}</p>
        </div>
      </form>
    </div>
  );
};

export default SingleEvent;
