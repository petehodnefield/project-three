import { gql } from "@apollo/client";

export const QUERY_EVENT = gql`
  query event($ID: ID) {
    event(_id: $ID) {
      _id
      name
      description
      culture
      date
    }
  }
`;
