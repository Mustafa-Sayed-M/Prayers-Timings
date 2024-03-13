export const formatePrayerTime = (prayerTime) => {
    const hourPrayerTime = prayerTime.split(':')[0];
    if (hourPrayerTime > 12) {
        return "0" + (hourPrayerTime - 12).toString() + ":" + (prayerTime.split(':')[1])
    } else {
        return prayerTime
    }
}