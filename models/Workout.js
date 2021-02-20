const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
	day: {
		type: Date,
		required: "Enter a date"
	},
	exercises: [
		{
			type: {
				type: String,
				required: "Type of exercise is required",
				enum: ["resistance", "cardio"]
			},
			name: {
				type: String,
				required: "Enter a name you weak fool"
			},
			duration: {
				type: Number,
				required: "How long did you exercise. Don't lie",
				min: 1
			},
			weight: {
				type: Number,
				min: 1
			},
			reps: {
				type: Number,
				min: 1
			},
			sets: {
				type: Number,
				min: 1
			},
			distance: {
				type: Number,
				min: 1
			}
		}
	]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
