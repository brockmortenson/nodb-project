const lightsaber = require('../../src/lightsaber.json');
const axios = require('axios');
const { response } = require('express');

module.exports = {
    getLightsabers: (req, res) => {
        const lightsabersArray = [];

        axios.get('http://localhost:3030/api/lightsabers').then(response => {
            lightsabersArray.push(response.lightsaber);
            res.status(200).send(lightsabersArray)
        })
        .catch(err => res.status(500).send(err));
    }
}