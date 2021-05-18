moment.locale("fr");

window.addEventListener("load", function() {
	document.getElementById("age").innerHTML = moment().diff("1994-06-20", 'y');
  document.getElementById("duration").innerHTML = moment().diff("2012-09-01", 'y');
	document.body.style.opacity = 1;
}, false);

var Ui = {
	galadrimContent: false,
	cremedelacremeContent: false,
	cimesContent: false,

	toggleExperience: function(element, content) {
		this[content] = !this[content];
		if (this[content]) {
			document.getElementById(content).classList.add("active");
			element.value = "RÉDUIRE";
		}
		else {
			document.getElementById(content).classList.remove("active");
			element.value = "EN SAVOIR PLUS";
		}
	}
};
