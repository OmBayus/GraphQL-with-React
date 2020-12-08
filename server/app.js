const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schema/schema")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

//allow cross-origin requests

app.use(cors())

mongoose.connect(process.env.MONGO_URL,{ useUnifiedTopology: true, useNewUrlParser: true })
mongoose.connection.once("open",()=>{
      console.log("Connected to Database")
})

app.use("/graphql",graphqlHTTP({
      schema,
      graphiql:true
}))

app.listen(4000,()=>{
      console.log("Server Started")  
})