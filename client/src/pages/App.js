// import React from 'react';
// import '../App.css';
// // Components
// import Login from "../components/Login";
// import SignUp from "../components/SignUp";
// import LongCard from "../components/LongCard";
// import ShortCard from "../components/ShortCard";
// import ColleaguesList from '../components/ColleaguesList';
// import ColleaguesSearch from '../components/ColleaguesSearch';
// import QuickSearches from '../components/QuickSearches';
// import NavButtons from '../components/NavButtons';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { setContext } from '@apollo/client/link/context';


// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';


// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   uri: 'http://localhost:3001/graphql',
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//       <Routes>
//     <Route
//       path="/"
//       element={<Home/>}
//     />

   
//     </Routes>

//     </Router>

//     </ApolloProvider>
//   );
// }

// export default App;
