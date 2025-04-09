export const typeDefs = `#graphql
  type Video {
    id: ID!
    title: String!
    description: String!
    youtubeUrl: String!
    createdAt: String!
  }

  type Query {
    videos: [Video!]!
    video(id: ID!): Video
  }

  type Mutation {
    createVideo(title: String!, description: String!, youtubeUrl: String!): Video!
    updateVideo(id: ID!, title: String, description: String, youtubeUrl: String): Video!
    deleteVideo(id: ID!): Boolean!
  }
`; 