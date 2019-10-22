console.log('hello world i am your father')

let allAudios = document.querySelectorAll('audio');
let allButtons = document.querySelectorAll('button');

let offeringAudio = document.querySelector('audio.offering') // TEMP


let playASound = function() {
	console.log('playASound', this) // *this* is the button that got clicked
	console.dir(this);

	// find button to find audio with matching class *HERE* with this

		//window.onclick = function(e) {
			// console.log(e); // then e.srcElement.className has the class
		// }​


	if (this.classList.contains('button')) {
		// document.querySelectorAll('button')
		this.classList.audio.paused();
		this.classList.audio.play();	
	} else {
		console.log('already playing! stop clicking so fast')
	}
}

allButtons.forEach(function(oneOfTheManyButtons) {
	oneOfTheManyButtons.addEventListener('click', playASound)
})

// for (var i = 0; i < allButtons.length; i++) {
// 	allButtons[i].addEventListener('click', playASound)
// }





// let offeringAudio = document.querySelector('audio.offering')
// let offeringButton = document.querySelector('button.offering')

// offeringButton.addEventListener('click', function() {
// 	if ( offeringAudio.paused ) {
// 		offeringAudio.play();
// 	}
// 	console.log('offering button click')
// })

