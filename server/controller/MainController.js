module.exports = {
  getHouses: async (req, res) => {
    const db = req.app.get('db');

    const houses = await db.get_houses();
    res.status(200).send(houses);
  },

  deleteHouse: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get('db');

    const deleted = await db.delete_house(id)
    res.status(200).send(deleted)
  }
};