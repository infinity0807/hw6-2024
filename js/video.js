var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("auto play is set to "+ video.autoplay);

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = video.volume*100 + '%';
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	
	video.playbackRate = video.playbackRate * 0.9;
	console.log("The new speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	
	video.playbackRate = video.playbackRate / 0.9;
	console.log("The new speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	var newtime = video.currentTime + 10;
	if (newtime > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime = newtime;
	}

	console.log("Current Location is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	
	if (video.muted){
		video.muted = false;
		document.querySelector("#mute").textContent = 'Mute';
	}
	else{
		video.muted = true;
		document.querySelector("#mute").textContent = 'Unmute';
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value /100;
	document.querySelector("#volume").textContent = document.querySelector("#slider").value + '%';
	
	
});

document.querySelector("#vintage").addEventListener("click", function() {
	
	video.classList.add("oldSchool");
	
});

document.querySelector("#orig").addEventListener("click", function() {
	
	video.classList.remove("oldSchool");
});



