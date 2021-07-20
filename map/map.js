import quests from '../data/data.js';

const questDiv = document.getElementById('quest-div');

for (let quest of quests) {

    const hrefForQuest = `../quest/?questId=${quest.id}`;
    const questLink = document.createElement('a');
    questLink.href = hrefForQuest;
    questLink.textContent = quest.title;

    questDiv.appendChild(questLink);
}