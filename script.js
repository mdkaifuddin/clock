let hour = prompt('Enter the hour ');
let min = prompt('Enter the min ');
let sec = prompt('Enter the sec ');
var userpm = prompt('AM or PM');
if (userpm == 'PM') {
    var pm = true;
}
else if (userpm == 'AM') {
    var pm = false;
}
document.getElementById('hour').innerHTML = hour;
document.getElementById('min').innerHTML = min;
document.getElementById('sec').innerHTML = sec;
document.getElementById('ampm').innerHTML = userpm;


let time = function () {
    let hour = document.getElementById('hour');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let ampm = document.getElementById('ampm');
    sec.innerHTML = parseInt(sec.innerHTML) + 1;


    if (sec.innerHTML == 60) {
        min.innerHTML = parseInt(min.innerHTML) + 1;
        sec.innerHTML = 0;
    }
    if (min.innerHTML == 60) {
        hour.innerHTML = parseInt(hour.innerHTML) + 1;
        n = min.innerHTML = 0;
    }
    if (hour.innerHTML == 13) {
        hour.innerHTML = 1;

    }
    if (hour.innerHTML == 12 && min.innerHTML == 0 && sec.innerHTML == 0) {
        if (pm == true) {
            ampm.innerHTML = 'AM';
            pm = false;
        }
        else if (pm == false) {
            ampm.innerHTML = 'PM';
            pm = true;
        }
    }
}

setInterval(time, 1000);
