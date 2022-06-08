const express = require('express');
const router = express.Router();

// Load Patient model
const Patient = require('../../models/Patient');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('Patient route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/Patient', (req, res) => {
  Patient.find()
    .then(patient => res.json(patient))
    .catch(err => res.status(404).json({ nopatientsfound: 'No Patients found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
    Patient.findById(req.params.id)
    .then(patient => res.json(patient))
    .catch(err => res.status(404).json({ nopatientsfound: 'No Patients found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    Patient.create(req.body)
    .then(patient => res.json({ msg: 'Patient added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this patient' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Patient.findByIdAndUpdate(req.params.id, req.body)
    .then(patient => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Patient.findByIdAndRemove(req.params.id, req.body)
    .then(patient => res.json({ mgs: 'Patient entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No patient found' }));
});

module.exports = router;

