const express = require('express')
const routes = require('./routes/productRoutes')
const connectDB = require('./db.js')
const path =require('path')
const cors = require('cors')

const port = process.env.PORT || 8000

const app = express()
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(express.static('client/build'));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));

connectDB()

app.use(express.json())
app.use("/api/products",routes )



app.listen(port, () => {
    console.log(`Server started on port ${port}`)})