// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js
function showSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    widthValue.innerText = width;
    heightValue.innerText = height;
}

window.onload = showSize;
window.addEventListener('resize', showSize);
window.removeEventListener('resize', showSize);
