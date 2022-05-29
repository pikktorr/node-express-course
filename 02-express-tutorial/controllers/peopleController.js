let { people } = require('../data');

const getPeople = (req, res) => {
  res.status(200).json({ status: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide name value' });
  }

  res.status(201).json({ success: true, person: name, message: 'Success' });
};

const createPersonAll = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide name value' });
  }

  res.status(201).json({
    success: true,
    data: [...people, { id: people.length + 1, name: name }],
    message: 'Success'
  });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide an id' });
  }

  res.status(201).json({
    success: true,
    data: [
      ...people.map((person) => {
        if (person.id === Number(id)) {
          return {
            ...person,
            name: name
          };
        } else {
          return person;
        }
      })
    ],
    message: 'Success'
  });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: `No person with id: ${id}` });
  }

  res.status(201).json({
    success: true,
    data: [...people.filter((person) => person.id !== Number(id))],
    message: 'Delete successful'
  });
};

module.exports = {
  getPeople,
  createPerson,
  createPersonAll,
  updatePerson,
  deletePerson
};
