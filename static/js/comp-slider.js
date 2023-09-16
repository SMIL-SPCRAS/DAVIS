const slider_first = document.querySelector('.slider-first');
const slider_second = document.querySelector('.slider-second');
const slider_third = document.querySelector('.slider-third');

document.querySelector('.slider-input-first').addEventListener('input', (e) => {
    slider_first.style.setProperty('--position', `${e.target.value}%`);
});

document.querySelector('.slider-input-second').addEventListener('input', (e) => {
    slider_second.style.setProperty('--position', `${e.target.value}%`);
});
document.querySelector('.slider-input-third').addEventListener('input', (e) => {
    slider_third.style.setProperty('--position', `${e.target.value}%`);
});
