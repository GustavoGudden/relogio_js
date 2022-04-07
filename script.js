const hourshand = document.querySelector('.hand.hours')
const minutehand = document.querySelector('.hand.minutes')
const secondshand = document.querySelector('.hand.seconds')

const setRotation = (element, rotationPorcentagem) => {
    element.style.setProperty('--rotation', rotationPorcentagem * 360)

}

const setclock = () => {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds() / 60;
    const minutes = (seconds + currentDate.getMinutes()) / 60;
    const hours = (minutes + currentDate.getHours()) / 12

    setRotation(secondshand, seconds);
    setRotation(minutehand, minutes);
    setRotation(hourshand, hours);

};


setclock();


setInterval(setclock, 1000);
