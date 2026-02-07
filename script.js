const textElement = document.getElementById("text");
const hoursElement = document.getElementById("hour-hand");
const minutesElement = document.getElementById("minute-hand");
const secondsElement = document.getElementById("second-hand");

function animateWatch() {

    requestAnimationFrame(animateWatch);
}

requestAnimationFrame(animateWatch);