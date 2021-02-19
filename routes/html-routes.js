let path = require("path");

module.exports = function (app) {
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirnam, "../html/index.html"));
	});
	app.get("/exercise", function(req, res) {
		res.sendFile(path.join(__dirname, "../html/exercise.html"));
	});
	app.get("/stats", function(req, res) {
		res.sendFile(path.join(__dirname, "../html/stats.html"));
	});
	app.get("/workouts", function(req, res) {
		res.sendFile(path.join(__dirname, "../html/workouts.html"));
	});

}