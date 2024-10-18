const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./type/types");
const resolvers = require("./mutation");
const PORT = process.env.PORT | 5003;
app.use(express.json());
app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });
async function startServer() {
  await server.start();
  const app = express();
  server.applyMiddleware({ app });

  mongoose
    .connect("mongodb://127.0.0.1:27017/sampledb")
    .then(() => console.log("DB Connected"))
    .catch(() => console.log("Not Connected"));

  app.listen(PORT, () => console.log("Running on server", PORT));
}
