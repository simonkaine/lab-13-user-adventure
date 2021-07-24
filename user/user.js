import { getUser } from '../data/getNset.js';

export function trackUser() {
    const player = getUser();
    const name = document.getElementById('player-name');
    const health = document.getElementById('hp');
    const gold = document.getElementById('gold');
    const avatar = document.getElementById('avatar');

    name.textContent = player.name;
    gold.textContent = player.gold;
    health.textContent = player.health;
    let fileEnd = '';
    switch (player.character) {
        case 'arachnid': 
            fileEnd = '.png';
            break;
        case 'dez':
            fileEnd = '.jpeg';
            break;
        case 'rico':
            fileEnd = '.gif';
            break;
        case 'ace':
            fileEnd = '.jpg';
            break;
    }
    avatar.src = `../assets/${player.character}` + fileEnd;
}