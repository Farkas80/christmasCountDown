let endDate = '12/24/2021 08:00:00 AM';

function countdown (endDate) {
    let days, hours, minutes, seconds;

    endDate = new Date(endDate).getTime();

    if(isNaN(endDate)) {
        return;
    }

    setInterval(calculate, 1000);

    function calculate() {

        let startDate = new Date().getTime();

        let timeRemaining = parseInt((endDate - startDate) / 1000);

        if (timeRemaining >= 0) {

            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);

            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);

            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);

            seconds = parseInt(timeRemaining);

            document.getElementById("days").innerHTML = parseInt(days, 10);
            document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
            document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
            document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
        } else {
            return;
        }
    }
}

countdown(endDate);

setInterval(createSnowFlake, 100);

function createSnowFlake () {
    const snow_flake = document.createElement('i');

    snow_flake.classList.add('fas');
    snow_flake.classList.add('fa-snowflake');

    snow_flake.style.left = Math.random() * window.innerWidth + 'px';
    snow_flake.style.animationDuration = Math.random() * 4 + 1 + 's';
    snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snow_flake.style.opacity = Math.random();

    document.body.appendChild(snow_flake);

    setTimeout(() => {
        snow_flake.remove;
    }, 150);
}
