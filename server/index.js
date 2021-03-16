// Add port # to proxy in package.json
const lightsaber = require('../src/lightsaber.json')
const express = require('express');
const addedLightsaberCtrl = require('./Controllers/addedLightsaberCtrl');
const stealLighsaberCtrl = require('./Controllers/stealLighsaberCtrl');

const app = express();

app.use(express.json());


app.get('/api/lightsabers', (req, res) => {
    res.status(200).send(lightsaber)
})

        /* Error Occurs Without One Or The Other */

app.get(`/api/lightsabers`, stealLighsaberCtrl.getLightsabers);

app.get('/api/added-lightsabers', addedLightsaberCtrl.getAddedLightsabers);
app.post('/api/added-lightsabers', addedLightsaberCtrl.stealLightsabers);
app.put('/api/added-lightsabers/:id', addedLightsaberCtrl.changeColor);
app.delete('/api/added-lightsabers/:id', addedLightsaberCtrl.removeLightsabers);

app.listen(3030, () => console.log('Server is running on 3030'))