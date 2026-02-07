const textElement = document.getElementById("text");
const hoursElement = document.getElementById("hour-hand");
const minutesElement = document.getElementById("minute-hand");
const secondsElement = document.getElementById("second-hand");

function animateWatch() {

    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    
    requestAnimationFrame(animateWatch);
}

requestAnimationFrame(animateWatch);