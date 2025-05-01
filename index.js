const secondHand = document.getElementById('second-hand');
const minutesHand = document.getElementById('minutes-hand');
const hoursHand = document.getElementById('hours-hand');

function clockTick() {
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    rotateClockHand(secondHand, seconds);
    rotateClockHand(minutesHand, minutes);
    rotateClockHand(hoursHand, hours);
}

function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(clockTick, 1000);
