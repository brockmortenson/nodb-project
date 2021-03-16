const addedLightsabers = [];
let id = 1;

module.exports = {
    getAddedLightsabers: (req, res) => {
        res.status(200).send(addedLightsabers)
    },

    stealLightsabers: (req, res) => {
        const {lightsaber} = req.body;
        console.log(lightsaber)
        lightsaber.id = id;
        id++;

        addedLightsabers.push(lightsaber);
        res.status(200).send(addedLightsabers);
    },

    changeColor: (req, res) => {
        const {id} = req.params;
        const {color} = req.body;

        const lightsaber = addedLightsabers.find(element => element.id === +id);
            lightsaber.color = color;
            res.status(200).send(addedLightsabers);
    },

    removeLightsabers: (req, res) => {
        const {id} = req.params;

        const index = addedLightsabers.findIndex(element => element.id === +id);
            addedLightsabers.splice(index, 1);
            res.status(200).send(addedLightsabers);
    }
}