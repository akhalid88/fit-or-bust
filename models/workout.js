const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
	day: {
		type: Date,
		required: "Enter a date"
	},
	exercises: [
		{
			type: Schema.Types.ObjectId,
			ref: "Exercises"
		}
	],

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;