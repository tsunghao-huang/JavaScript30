// get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const fullScreenButton = player.querySelector('.full');
const screenIcon = player.querySelector('#screen-icon');

const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build out functions
function togglePlay() {
    const method = video.paused ? "play" : "pause";
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// handle updates on volumne and playback
function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function handleFull() {
    // (!full)? player.requestFullscreen():document.exitFullscreen()
    if (!document.fullscreen) {
        screenIcon.classList.replace('fa-expand', 'fa-compress');
        player.requestFullscreen();
    } else {
        screenIcon.classList.replace('fa-compress', 'fa-expand');
        document.exitFullscreen();
    }
    
}

// handle event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);


toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

//update value in real time.
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', () => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown=true);
progress.addEventListener('mouseup', () => mousedown=false);


// full screen button
fullScreenButton.addEventListener('click', handleFull)

// trigger skip buttons by Arrow right and left.
window.addEventListener('keyup', (e) => {
    if (e.key == "ArrowRight") {
        document.getElementById("forward").click();
    } else if (e.key == "ArrowLeft") {
        document.getElementById("backward").click();
    }
});