console.log('hello world i am your father')


let forceAudio = document.querySelector('audio.force');
let forceButton = document.querySelector('button.force')

let playForceSound = function() {
	forceAudio.play()
}

forceButton.addEventListener('click', playForceSound)


/* sounds.forEach(function(sounds, i){ // happens 6 times
	console.log(sounds.force);

	let soundsDiv = document.createElement('div')
	soundsDiv.classList.add('sounds')
})

*/