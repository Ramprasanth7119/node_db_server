const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/api',userRoutes);

const PORT = process.env.PORT || 1309;

app.listen(PORT,()=>{
    console.log(`App is listening in ${PORT} port`);
})