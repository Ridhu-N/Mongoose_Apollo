const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const typeDefs = require("./type/types");
const resolvers = require("./mutation");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.set("strictQuery", false);
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  const app = express();
  app.use(cors());
  server.applyMiddleware({ app });
  mongoose
    .connect("mongodb://127.0.0.1:27017/userDB")
    .then(() => {
      console.log("DB connected");

      app.listen(9090, (err) => {
        if (!err) {
          console.log("Server is running on http://localhost:9090/graphql");
        } else {
          console.log("Error in server creation");
        }
      });
    })
    .catch((e) => console.log("DB not connected"));
}

startServer();
