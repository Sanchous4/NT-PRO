function padTime(time, len = 2) {
    return `${time}`.padStart(len, '0');
}

export function getRealTime() {
    const currentDate = new Date();

    const seconds = padTime(currentDate.getSeconds());
    const minutes = padTime(currentDate.getMinutes());
    const hours = padTime(currentDate.getHours());

    return `${hours}:${minutes}:${seconds}`;
}

export function getRealTimestamp() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = padTime(currentDate.getMonth());
    const day = padTime(currentDate.getDay());

    const hoursMinutesSeconds = getRealTime();

    const milliseconds = padTime(currentDate.getMilliseconds(), 3)

    return `${year}.${month}.${day} ${hoursMinutesSeconds}.${milliseconds}`;
}
