let un;
if (typeof un === 'number') {
    un.toFixed(2);
}
else if (typeof un === 'string') {
    un.toUpperCase();
}
else if (un instanceof Date) {
    un.getTime();
}
else if (un instanceof HTMLElement) {
    un.nextElementSibling();
}
export {};
