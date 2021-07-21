import quests from '../data/data.js';

export function completedAllMissions(player){

    for (let quest of quests){
        if (!player.completed[quest.id]) {
            return false;
        }
    }
    return true;
}