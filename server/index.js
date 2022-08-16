const express = require('express');
const app = express();
const cors = require('cors');



app.use(express.json());
app.use(cors());

const {
    getHouses,
    deleteHouses,
    createHouses,
    updateHouses
} = require('./controller');

app.get('/api/houses', getHouses);
app.delete('/api/houses/:id', deleteHouses);
app.post('/api/houses', createHouses);
app.put('/api/houses/:id', updateHouses);




const SERVER_PORT = 4004;
app.listen(SERVER_PORT, ()=> console.log (`listening on ${SERVER_PORT}`));