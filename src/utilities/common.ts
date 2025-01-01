export function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
}

export function getCurrentYear() {
    return new Date().getFullYear();
}

export function getCurrentMonth() {
    return new Date().getMonth();
}