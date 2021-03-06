import quests from '../data/data.js';
import { getUser } from '../data/getNset.js';
import { trackUser } from '../user/user.js';
import { completedAllMissions } from '../completed-quests/completed-Quests.js';

const questDiv = document.getElementById('quest-div');
const player = getUser();

trackUser();

if (player.health <= 0 || completedAllMissions(player)) {
    window.location.replace('../results/index.html');
}

for (let quest of quests) {
    if (player.completed[quest.id]){
        overwriteAndCreateSpan(quest);
    } else {
        questLinkCreated(quest);
    }
}

function overwriteAndCreateSpan(quest){
    const span = document.createElement('span');
    span.innerText = `${quest.title} COMPLETED!`;
    questDiv.appendChild(span);
}

function questLinkCreated(quest){

    const hrefForQuest = `../quest/?questId=${quest.id}`;
    const questLink = document.createElement('a');

    questLink.href = hrefForQuest;
    questLink.textContent = quest.title;
    questDiv.appendChild(questLink);
}
