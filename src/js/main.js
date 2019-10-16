console.log('hello world i am your father')

// let allAudios = document.querySelectorAll('audio');
// let allButtons = document.querySelectorAll('button');

// let playAllAudios = function(){

// 	let playForceSound = function(){
// 		for (var i = 0; i < allButtons.length; i++) {
// 			allButtons[i].addEventListener('click', playForceSound)
// 		}
// 	}
// 	playForceSound();
// }
// playAllAudios();



let offeringAudio = document.querySelector('audio.offering')
let playOfferingAudio = function(){
	offeringAudio.play()
}

let offeringButton = document.querySelector('button.offering')
offeringButton.addEventListener('click', function() {
	console.log('offering button click')
})

offeringButton.addEventListener('click', playOfferingAudio)
