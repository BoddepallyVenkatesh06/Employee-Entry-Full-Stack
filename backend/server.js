const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 5000

// very IMP - wasted my 1.5 hours
// In frontend , if this is not then fetching problem is seen 
// TypeError: Failed to fetch
var cors = require("cors");
app.use(
    cors({
        origin: "*",
    })
);


// Middleware
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App Sarted on PORT -> ${PORT}`);
});


const userRoutes = require('./routes/user')
app.use('/api/v1', userRoutes);

app.use('/', (req, res) => {
    res.send('<h1>Default Route Page</h1>')
})

const dbConnect = require('./config/database')
dbConnect();