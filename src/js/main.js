console.log('hello world i am your father')

let allAudios = document.querySelectorAll('audio');
let allButtons = document.querySelectorAll('button');

let currentSoundIndex = 0

let playAllAudios = function(){

	audio.button.forEach(function(audio, i){ // happens 6 times
		audio.play();
	})

	currentSoundIndex++
}











// let playForceSound = function() {
// 	forceAudio.play()
// }

// forceButton.addEventListener('click', playForceSound)


/* audios.forEach(function(sounds, i){ // happens 6 times
	console.log(sounds.force);
})
*/