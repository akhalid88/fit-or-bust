const path = require("path");

module.exports = (app) => {
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "../html/index.html"));
	});

	app.get("/exercise", (req, res) => {
		res.sendFile(path.join(__dirname, "../html/exercise.html"));
	});

	app.get("/stats", (req, res) => {
		res.sendFile(path.join(__dirname, "../html/stats.html"));
	});
	// app.get("/workouts", function(req, res) {
	// 	res.sendFile(path.join(__dirname, "../html/workouts.html"));
	// });

}