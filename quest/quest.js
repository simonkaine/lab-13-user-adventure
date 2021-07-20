import { findById } from '../data/getNset.js';
import quests from '../data/data.js';

const urlParams = new URLSearchParams(window.location.search);

const titleForQuest = document.getElementById('quest-title');
const imageForQuest = document.getElementById('quest-image');
const descriptionOnQuest = document.getElementById('quest-description');
const choices = document.getElementById('options');

const mainQuest = findById(quests, urlParams.get('questId'));

titleForQuest.textContent = mainQuest.title;
imageForQuest.src = `../assets/${mainQuest.image}`;
descriptionOnQuest.textContent = mainQuest.description;

for (let choice of mainQuest.choices){
    const label = document.createElement('label');
    
    const radio = document.createElement('input');
    radio.name = 'choice';
    radio.type = 'radio';
    radio.value = choice.id;
    
    const span = document.createElement('span');
    span.textContent = choice.description;
    
    label.append(radio, span);
    
    choices.append(label);
}