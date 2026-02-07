const textElement = document.getElementById("text");
const hoursElement = document.getElementById("hour-hand");
const minutesElement = document.getElementById("minute-hand");
const secondsElement = document.getElementById("second-hand");

let showDate = true;

function animateWatch() {
    const date = new Date();

    const day = date.getDate();
    const ampm = date.getHours() >= 12 ? "PM" : "AM";
    // const hour = date.getHours();
    // const minute = date.getMinutes();
    const second = date.getSeconds();
    const hour = date.getHours() + date.getMinutes() / 60;
    const minute = date.getMinutes() + date.getSeconds() / 60;
    // const second = date.getSeconds() + date.getMilliseconds() / 1000;

    textElement.textContent = showDate ? day : ampm;
    hoursElement.setAttribute("transform", `rotate(${(360/12) * hour})`);
    minutesElement.setAttribute("transform", `rotate(${(360/60) * minute})`);
    secondsElement.setAttribute("transform", `rotate(${(360/60) * second})`);

    requestAnimationFrame(animateWatch);
}

requestAnimationFrame(animateWatch);

textElement.addEventListener("click", () => {
    showDate = !showDate;
});