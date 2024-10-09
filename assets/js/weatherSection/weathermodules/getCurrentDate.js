import { dateView } from './dateView.js';
export function getCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const weekday = currentDate.toLocaleString('default', { weekday: 'long' });

    let date = {
        day: day,
        month: month,
        weekday: weekday
    };

    dateView(date);
}