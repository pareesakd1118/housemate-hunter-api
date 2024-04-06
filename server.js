const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000)

app.get('/api/v1/roommates', async (request, response) => {
    try {
        const roommates = await database('roommate').select();
        response.status(200).json(roommates);
    } catch(error) {
        response.status(500).json({error});
    }
});

app.listen(app.get('port'), () => {
    console.log(`App is running on http://localhost:${app.get('port')}.`);
  });