const maindiv = document.querySelector('.maindiv');
const maindiv__subdiv = document.querySelector('.maindiv > .maindiv__subdiv');
const maindiv__subdiv__text = document.querySelector('.maindiv > .maindiv__subdiv');

// function color() {
//     maindiv.style.background = `#${Math.floor(999999 * Math.random())}`;
//     txt = maindiv__subdiv.style.background = `#${Math.floor(999999 * Math.random())}`;
//     maindiv__subdiv__text.textContent = `${txt}`;
// }
const color = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += color[random()];
    }
    maindiv__subdiv__text.innerHTML = hex;
    maindiv.style.background = hex;
});
let random = () => Math.floor(color.length * Math.random());