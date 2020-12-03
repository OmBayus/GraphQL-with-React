const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schema/schema")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()

mongoose.connect(process.env.MONGO_URL,{ useUnifiedTopology: true, useNewUrlParser: true })
mongoose.connection.once("open",()=>{
      console.log("Connected to Database")
})

app.use("/graphql",graphqlHTTP({
      schema,
      graphiql:true
}))

app.listen(3000,()=>{
      console.log("Server Started")  
})