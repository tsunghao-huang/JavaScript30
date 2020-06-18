let countdown;
const timeDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {

    // clear any existing timers, prevent multiple timers from runnning at the same time
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    // display the time left immediately, doesn't have to wait for the setInterval function
    displayTImeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop it
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        //display it
        displayTImeLeft(secondsLeft);
    }, 1000);
}

function displayTImeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0':''}${remainderSeconds}`;
    timeDisplay.textContent = display;

    document.title = display;
}

function displayEndTime(timestamp) {
    // milliseconds milliseconds since 1970/1/1
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? '0':''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // "this" is document.customForm
    const mins = this.minutes.value;
    timer(mins * 60); // timer takes seconds only
    this.reset;
});