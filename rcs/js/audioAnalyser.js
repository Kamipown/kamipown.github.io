var AudioAnalyser = {
	audio: null,
	ctx: null,
	analyser: null,
	source: null,
	frequencies: null,

	topSpans: [],
	bottomSpans: [],

	interval: null,
	fps: 60,

	init: function() {
		this.initAnalyser();
		this.initUI();


		var self = this;
		this.interval = window.setInterval(function() {
			self.update();
		}, 1000 / this.fps);

		var b = true;
		document.getElementById("audioBackground").addEventListener("click", function() {
			if (b)
				document.getElementById("audioBackground").className = "topActive";
			else
				document.getElementById("audioBackground").className = "bottomActive";
			b = !b;
		}, false);
		document.getElementById("audioBackground").click();
	},

	initAnalyser: function() {
		this.audio = new Audio();
		this.audio.src = "snd/DoctorVox-TheDriveHome.mp3";
		this.audio.volume = 0.02;
		this.audio.play();

		this.ctx = new (window.AudioContext || window.webkitAudioContext)();

		this.analyser = this.ctx.createAnalyser();
		this.analyser.connect(this.ctx.destination);

		this.source = this.ctx.createMediaElementSource(this.audio);
		this.source.connect(this.analyser);

		this.frequencies = new Uint8Array(50);
	},

	initUI: function() {
		var containers = document.querySelectorAll("#audioBackground > div");
		for (var i = 0; i < 100; ++i) {
			var topSpan = document.createElement("span");
			var bottomSpan = document.createElement("span");
			topSpan.style.left = i + "%";
			bottomSpan.style.left = i + 0.5 + "%";
			containers[0].appendChild(topSpan);
			containers[1].appendChild(bottomSpan);
			this.topSpans.push(topSpan);
			this.bottomSpans.push(bottomSpan);
		}
	},

	update: function() {
		this.analyser.getByteFrequencyData(this.frequencies);

		for (var i = 0; i < 50; ++i) {
			this.topSpans[i].style.height
			= this.topSpans[100 - i - 1].style.height
			= this.bottomSpans[i].style.height
			= this.bottomSpans[100 - i - 1].style.height
			= this.frequencies[i] * 0.25 + "px";
		}
	}
};

// window.addEventListener("load", function() { AudioAnalyser.init();}, false);
