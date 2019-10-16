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
offeringAudio.addEventListener('click', function(){
	offeringAudio.play()
})



let offeringButton = document.querySelector('button.offering')
offeringButton.addEventListener('click', function() {
	if ( offeringButton.paused ) {
		offeringAudio.play();
		offeringButton.src = 'sounds/Offering.mp3';
	}
	console.log('offering button click')
})

