const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minElement = document.getElementById("mins");
const secElement = document.getElementById("secs");
const birthday = "16 Sept 2022";

function countdown(){
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    const tseconds = (birthdayDate - currentDate) / 1000;

    const days = Math.floor(tseconds / 3600 / 24);
    const hours = Math.floor(tseconds / 3600) % 24;
    const mins = Math.floor(tseconds / 60) % 60;
    const secs = Math.floor(tseconds) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = format(hours);
    minElement.innerHTML = format(mins);
    secElement.innerHTML = format(secs);
    
    //console.log(tseconds);
}

function format(time) {
    return time < 10 ? `0${time}` : time;
}

//initial call in ms
countdown();
setInterval(countdown, 1000);
