console.log('hello world i am your father')

// NEW WORKING STUFF

// find button
let allButtons = document.querySelectorAll('.button')
		allButtons = Array.from(allButtons)
		console.log(allButtons)

	document.body.addEventListener('click', function(e){
		let clickedObj = e.target;
		console.dir(clickedObj)

		if(clickedObj.classList.contains('button')){
			console.log('yay!')
			buttonClicking(clickedObj)
		} else {
			console.log('fuck.')
		}
	})

let buttonClicking = function(button) {
	// do all the shit to the button
	let index = allButtons.indexOf(button)
	let soundName = allSounds[index]
	console.log(soundName)
}

// call sound playing function using soundName
// playSound(soundName)

// find audio
let allSounds = document.querySelectorAll('.audio')
	allSounds = Array.from(allSounds)
	console.dir(allSounds)

	document.body.addEventListener('click', function(e){
		let clickedObj = e.target;
		console.log(allSounds)

		clickedObj.classList.contains('.audio');
		console.log('click!')

		allSounds.forEach(function(allSounds){
					// if the video isnt playing sound 
		if ( allSounds.paused === true ){
			// unpause it
			allSounds.play()
			} else {
				('stop clicking! already playing!')
			}

		})
})

allButtons.forEach(function(oneOfTheManyButtons) {
	oneOfTheManyButtons.addEventListener('click', allSounds)
})














// OLD STUFF

// let allAudios = document.querySelectorAll('audio');

// allButtons.forEach(function(oneOfTheManyButtons) {
// 	oneOfTheManyButtons.addEventListener('click', playASound)
// })

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