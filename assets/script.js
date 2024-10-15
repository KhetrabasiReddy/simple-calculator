console.log('Connect me on %cLinkedIn\n','color:#0077B5;font-size:2rem;text-shadow:3px 1px black;','https://www.linkedin.com/in/khetrabasi-reddy-b0ba77224/')

const clickSound = new Audio('../assets/mouse-click-sound.mp3');
clickSound.preload = 'auto'; 

document.querySelectorAll('.inputs').forEach((input) => {
    input.addEventListener('click', () => {
        if (!clickSound.paused) {
            clickSound.currentTime = 0;  
        }
        clickSound.play(); 
    });
});

