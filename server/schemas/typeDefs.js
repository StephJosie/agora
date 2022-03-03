const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Post {
    _id: ID!
    title: String!
    text: String!
    authorUsername: String!
    communityId: ID!
  }

  type User {
    _id: ID!
     userName: String!
      bio: String!
     posts: [Post]!
    }

    type Query {
      Post: [Post]
      User(_id: String): User
   }
  
   type Mutation {
     createPost(_id: String!): Post
     createUser(_id: String!): User
     createCommunity(_id: String!): Community
   }
   ;

  type Comments {
    text: String!
    contentType: String!
    authorUsername: String!
    communityId: Int
    comments: String!
    reactions: Int
  }

  type Query {
    Post: [Post]
    User: [User]
    Community: [Community]
    Comments: [Comments]
  }

  type Mutation {
    createPost(_id: String!): Post
    createUser(_id: String!): User
    createCommunity(_id: String!): Community
    createComments(_id: String!): Comments
  }`;

module.exports = typeDefs;
