export function getFormattedDate() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    if (day.length === 2) {
        return `${parseInt(day) + 1}.${month}.${year}`;
    } else {
        return `0${parseInt(day) + 1}.${month}.${year}`
    }
}
