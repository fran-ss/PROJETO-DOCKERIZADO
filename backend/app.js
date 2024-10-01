const express = require("express");
const cors = require("cors"); 
const app = express();
const apiRoutes = require('./routes/api');

app.use(cors()); 

app.use('/api', apiRoutes);

const PORT = 3333;
app.listen(PORT, () => {
    console.log('Mais menino estou rodando');
});
