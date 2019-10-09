console.log('hello world i am your father')

let allAudios = document.querySelectorAll('audio');
let allButtons = document.querySelectorAll('button');


let playAllAudios = function(){

	let playForceSound = function(){
	forceAudio.play()
	}
}
for (var i = 0; i < allButtons.length; i++) {
	allButtons[i].addEventListener('click', playAllAudios)
}


// let playForceSound = function() {
// 	forceAudio.play()
// }

// forceButton.addEventListener('click', playForceSound)


/* audios.forEach(function(sounds, i){ // happens 6 times
	console.log(sounds.force);
})
*/