import { trackUser } from '../user/user.js';
import { getUser, saveUser } from '../data/getNset.js';

const outcomeImage = document.getElementById('outcome');
const lose = document.getElementById('lose');
const win = document.getElementById('win');
const button = document.getElementById('btn');

trackUser();

const player = getUser();
saveUser(player);

if (player.health <= 0) {
    outcomeImage.src = `../assets/attacked2.jpg`;
    const span = document.createElement('span');
    span.innerText = 'You have LOST! OH NO! The bugs are everywhere!!';
    lose.appendChild(span);
} else {
    outcomeImage.src = `../assets/neil.jpg`;
    const span = document.createElement('span');
    span.innerText = 'WOOHOO! YOU WON! No more bugs! Young Neil Patrick Harris approves!';
    win.appendChild(span);
}

button.addEventListener('click', () => {
    localStorage.clear();
    window.location.replace('../');
});
