export const DATE_CONSTANTS = {
    MONTH: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    DAYS: Array.from({ length: 31 }, (_, i) => i + 1),
    YEARS: Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)
}