import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $firstName: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      firstName: $firstName
    ) {
      token
      user {
        _id
      }
    }
  }
`;
