const router = require("express").Router();
const db = require("../models");


//GET workouts ?
router.get("/api/workouts", (req, res) => {
	db.Workout.find({})
		// .sort({ day: 1 })
		.then(dbWorkout => {
			res.json(dbWorkout);
		})
		.catch(err => {
			res.status(400).json(err);
		});
});

//PUT /api/workouts/:id
router.put("/api/workouts/:id", (req, res) => {
	db.Workout.findOneAndUpdate(
		{ _id: req.params.id },
		{ $push: { exercises: req.body } },
		{
			new: true,
			upsert: true
		})
		.then(dbWorkout => {
			res.json(dbWorkout)
		})
		.catch(err => {
			res.json(err);
		});
});

//POST /api/workouts
router.post("/api/workouts", ({ body }, res) => {
	// console.log(req.body);
	db.Workout.create(body)
		.then(dbWorkout => {
			res.json(dbWorkout);
		})
		.catch(err => {
			res.json(err);
		});
});

//GET /api/workouts/range
router.get("/api/workouts/range", (req, res) => {

});

module.exports = router;