const router = require("express").Router();
const db = require("../models");


//GET workouts ?
router.get("/api/workouts", (req, res) => {
	db.Workout.find({})
		.sort({ day: -1 })
		.then(dbWorkout => {
			res.json(dbWorkout);
		})
		.catch(err => {
			res.status(400).json(err);
		});
});

//PUT /api/workouts/:id
router.put("/api/workouts/:id", (req, res) => {

});

//POST /api/workouts
router.post("/api/workouts", (req, res) => {

});

//GET /api/workouts/range
router.get("/api/workouts/range", (req, res) => {

});

module.exports = router;