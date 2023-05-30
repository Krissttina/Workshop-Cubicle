const router = require('express').Router(); 

const cubeManager = require('../managers/cubeManager');

//Path /cubes/create
router.get('/create', (req, res) => { //action#1 serve form
    console.log(cubeManager.getAll());
    res.render('create');
});

router.post('/create', async (req, res) => { //action#2 accept data after form is submited
    const { //validate data
        name,
        description,
        imgUrl,
        difficultyLevel,
    } = req.body; // get data and save 

    await cubeManager.create({ //expects concrete data
        name,
        description,
        imgUrl,
        difficultyLevel: Number(difficultyLevel),
    });

    res.redirect('/'); //redirect to main page after submit form
});

router.get('/:cubeId/details', (req, res) => {
    const cube = cubeManager.getOne(req.params.cubeId);
    res.render('details', { cube });
});

module.exports = router;