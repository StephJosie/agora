const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Post {
    _id: ID!
     title: String!
   }
   `

//   type Matchup {
//     _id: ID!
//     tech1: String!
//     tech2: String!
//     tech1_votes: Int
//     tech2_votes: Int
//   }

//   type Query {
//     tech: [Tech]
//     matchups(_id: String): [Matchup]
//   }

//   type Mutation {
//     createMatchup(tech1: String!, tech2: String!): Matchup
//     createVote(_id: String!, techNum: Int!): Matchup
//   }
// `;

module.exports = typeDefs;