const router = require("express").Router();
const db = require("../models");

router.get("api/workouts", (req, res) => {
	db.Workout.find({})
	.sort({day: -1})
	.then(dbWorkout => {
		res.json(dbWorkout);
	})
	.catch(err => {
		res.status(400).json(err);
	});
});

module.exports = router;