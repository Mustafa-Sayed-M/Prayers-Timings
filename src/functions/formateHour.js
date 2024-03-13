export const formateHour = (hour) => {
    if (hour > 12) {
        hour = hour - 12;
        if (hour < 10) {
            return "0" + hour
        } else {
            return hour
        }
    } else if (hour === 0) {
        return 12;
    } else if (hour < 10) {
        return '0' + hour;
    }
};