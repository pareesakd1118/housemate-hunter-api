const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 3001)

app.use(cors({origin: 'http://localhost:3002'}));

app.get('/api/v1/roommates', async (request, response) => {
    try {
        const roommates = await database('roommate').select();
        response.status(200).json(roommates);
    } catch(error) {
        response.status(500).json({error});
    }
});

app.get('/api/v1/roommates/:id', async (request, response) => {

    try {
        const roommates = await database('roommate').where('id', request.params.id).select();
        
        if(roommates.length){
            response.status(200).json(roommates);
        } else {
            response.status(404).json({
                error: `Could not find roommate with id ${request.params.id}`
            });
        }
    } catch (error) {
        response.status(500).json({error});
    }
});

app.listen(app.get('port'), () => {
    console.log(`App is running on http://localhost:${app.get('port')}.`);
  });
  