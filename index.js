const express = require('express')
const routes = require('./routes/productRoutes')
const connectDB = require('./db.js')

const cors = require('cors')

const port = process.env.PORT || 5000

const app = express()
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

connectDB()

app.use(express.json())
app.use("/api/products",routes )



app.listen(port, () => {
    console.log(`Server started on port ${port}`.yellow.bold)})