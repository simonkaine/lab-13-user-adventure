import { getUser } from '../data/getNset.js';

export function trackUser() {
    const player = getUser();
    const name = document.getElementById('player-name');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');

    name.textContent = player.name;
    gold.textContent = player.gold;
    hp.textContent = player.hp;
}