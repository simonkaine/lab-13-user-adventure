import { trackUser } from '../user/user.js';
import { findById } from '../data/getNset.js';
import quests from '../data/data.js';
import { getUser, saveUser } from '../data/getNset.js';

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

const questForm = document.getElementById('choice-form');

questForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const choiceForm = new FormData(questForm);
    const choiceValueFromChoiceId = choiceForm.get('choice');
    const foundIdValue = findById(mainQuest.choices, choiceValueFromChoiceId);

    const player = getUser();

    player.gold += foundIdValue.gold;
    player.hp += foundIdValue.hp;
    player.completed[mainQuest.id] = true;
    saveUser(player);

    const backToMap = document.getElementById('back-to-map');
    descriptionOnQuest.textContent = foundIdValue.result;
    questForm.classList.add('hidden');
    backToMap.classList.remove('hidden');
});

trackUser();