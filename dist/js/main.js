"use strict";console.log("hello world i am your father");var allButtons=document.querySelectorAll(".button");allButtons=Array.from(allButtons),console.log(allButtons),document.body.addEventListener("click",function(l){var o=l.target;console.dir(o),o.classList.contains("button")?(console.log("yay!"),buttonClicking(o)):console.log("fuck.")});var buttonClicking=function(l){var o=allButtons.indexOf(l),n=allSounds[o];console.log(n)},allSounds=document.querySelectorAll(".audio");allSounds=Array.from(allSounds),console.dir(allSounds),document.body.addEventListener("click",function(l){var o=l.target;console.log(allSounds),o.classList.toggle("play"),console.log("click!"),!0===allSounds.paused&&allSounds.play()});
//# sourceMappingURL=main.js.map