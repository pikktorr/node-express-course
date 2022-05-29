const express = require('express');
const peopleRouter = express.Router();
const {
  getPeople,
  createPerson,
  createPersonAll,
  updatePerson,
  deletePerson
} = require('../controllers/peopleController');

peopleRouter.get('/', getPeople);
peopleRouter.post('/', createPerson);
peopleRouter.post('/insomnia', createPersonAll);
peopleRouter.put('/:id', updatePerson);
peopleRouter.delete('/:id', deletePerson);

// peopleRouter.route('/').get(getPeople).post(createPerson);
// peopleRouter.route('/insomnia').post(createPersonAll);
// peopleRouter.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = peopleRouter;
