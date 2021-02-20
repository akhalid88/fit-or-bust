const router = require("express").Router();
const Workout = require("../models/Workout.js");


//GET workouts ?
router.get("/api/workouts", (req, res) => {
	Workout.aggregate([
		{
			$addFields: {
				totalDuration: { $sum: "$exercises.duration" }
			}
		}
	])
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
	Workout.findOneAndUpdate(
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
	Workout.create(body)
		.then(dbWorkout => {
			res.json(dbWorkout);
		})
		.catch(err => {
			res.json(err);
		});
});

//GET /api/workouts/range
router.get("/api/workouts/range", (req, res) => {
	Workout.find({}).limit(7)
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			res.json(err);
		});
});

module.exports = router;