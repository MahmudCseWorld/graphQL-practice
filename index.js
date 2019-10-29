let express = require("express");
const schema = require("./schema/schema"); 

const app = express();
const expressGraphql = require("express-graphql");

app.use(
  "/graphql",
  expressGraphql({
    schema,
    graphiql: true
  })
);

app.listen(5000, () => {
  console.log("server is listening at port 5000");
});
