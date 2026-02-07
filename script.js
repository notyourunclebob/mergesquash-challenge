const textElement = document.getElementById("text");
const hoursElement = document.getElementById("hour-hand");
const minutesElement = document.getElementById("minute-hand");
const secondsElement = document.getElementById("second-hand");

function animateWatch() {

    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    textElement.textContent = day;
    hoursElement.setAttribute("transform", `rotate(${(360/12) * hour})`);
    minutesElement.setAttribute("transform", `rotate(${(360/60) * minute})`);
    secondsElement.setAttribute("transform", `rotate(${(360/60) * second})`);

    requestAnimationFrame(animateWatch);
}

requestAnimationFrame(animateWatch);