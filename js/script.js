const time1Hours = document.getElementById("time1_hours")
const time1Minutes = document.getElementById("time1_minutes")

const time2Hours = document.getElementById("time2_hours")
const time2Minutes = document.getElementById("time2_minutes")

let time1 = {
    hours: 0,
    minutes: 0
}

let time2 = {
    hours: 0,
    minutes: 0
}

function floatTimeToIntTime(time) {
    
}

function readValues() {
    time1.hours = Number(time1Hours.value)
    time1.minutes = Number(time1Minutes.value)
    time2.hours = Number(time2Hours.value)
    time2.minutes = Number(time2Minutes.value)
}

function calculateTimes(action) {
    readValues();

    let hours = 0
    let minutes = 0

    let minutes1 = time1.hours * 60 + time1.minutes
    let minutes2 = time2.hours * 60 + time2.minutes

    let minuteResult = 0
    
    if (action == "difference") {
        minuteResult = Math.abs(minutes1 - minutes2)
    }
    else if (action == "sum") {
        minuteResult = minutes1 + minutes2
    }

    minutes = minuteResult % 60
    hours = (minuteResult - minutes) / 60

    setValues(hours, minutes)
}

function setValues(hours, minutes) {
    time1Hours.value = hours
    time1Minutes.value = minutes
    time2Hours.value = ""
    time2Minutes.value = ""
}