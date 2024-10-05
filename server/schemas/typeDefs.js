const typeDefs = `
type Journal {
    _id: ID!
    content: String!
    author: User
    createdAt: String
    updatedAt: String
  
    
}
type User {
    _id: ID!
    firstname: String!
    journals: [Journal]
}
type Song{
    _id:ID!
    artist:String!
    genre: String!
    playlist:String
}


type Query {
    journals : [Journal]
    songs: [Song]
    users : [User]
    singleuser(email:String!) : User
}
type Mutation{
    addJournal(content:String!, authorId:ID!): Journal
    deleteJournal(_id:ID!): Journal
    updateJournal(_id: ID!, title: String!,content: String!): Journal
   
}
`;
module.exports = typeDefs;
