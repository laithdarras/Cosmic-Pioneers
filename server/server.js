//initialize express
const express = require("express");
//iniitalize Apollo Client server for GraphQL
const { ApolloServer } = require("@apollo/server");
//initialize Middleware that connects Apollo Server with Express, allowing GraphQL requests to be handled by the Express server.
const { expressMiddleware } = require("@apollo/server/express4");
//call the resolvers and typdefs from their folders:
const { typeDefs, resolvers } = require("./schemas");
//connect mongoDB database
const db = require("./config/connection");

//his initializes an Express application, which serves as the main web server.
const app = express();

//these typedefs and resolvers will be moved into their own files under the schema folder

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT || 3001;

//start the server
//These initializations are placed inside the startServer function to ensure that the Apollo Server is fully ready before handling any requests. It allows for proper sequencing of operations, like starting the server, applying middleware, and handling GraphQL requests—all of which rely on the server being configured correctly.
const startServer = async () => {
  //operation that prepares the Apollo Server to handle incoming GraphQL requests
  //The await keyword ensures that the server is completely ready before any requests are processed.
  await server.start();
  //init express middleware that will read json data that is sent from the client to the server
  app.use(express.json());
  //tells the server to handle requests sent to the /graphql endpoint. When a client sends a GraphQL query or mutation
  app.use("/graphql", expressMiddleware(server));
  //db
  db.once("open", () => {
    console.log("MongoDB database connected successfully!");
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });

  app.get("/", (req, res) => {
    res.send("NASA Project");
  });
  //   app.listen(PORT, () => {
  //     console.log(`Example app listening on port ${PORT}`);
  //   });
};

startServer();
