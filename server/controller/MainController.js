module.exports = {
  getHouses: async (req, res) => {
    const db = req.app.get('db');

    const houses = await db.get_houses();
    res.status(200).send(houses);
  },

  deleteHouse: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get('db');

    await db.delete_house(id)
    res.sendStatus(200)
  },

  addHouse: async (req, res) => {
    // console.log('hit')
    const { property, address, city, state, zip } = req.body;
    const db = req.app.get('db');

    await db.add_houses(property, address, city, state, zip)
    res.sendStatus(200)
  }
};