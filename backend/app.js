const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");

const app = express(); // express app

const coreOptions = {
  origin: "https://abhirampjayan.com",
};

//app.use(cors(coreOptions));
app.use("/", cors(coreOptions), (req, res) => {
  console.log(req.headers);
  res.json({ sucess: "OK" });
});
app.use("/graphql", graphqlHTTP({}));

// Server listening to port 4000
app.listen(4000, () => {
  console.log("Server listening to port 4000");
});
