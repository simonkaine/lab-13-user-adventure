const arachnids = {
    id: 'arachnids',
    title: 'Home Invasion!',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'attacked.jpg',
    description: `
        The alien space bugs decide to land on your planet and send everything they got. What are your orders?
    `,
    choices: [{
        id: 'nuke',
        description: 'Send a nuke in to destroy them',
        result: `
            You have nuked yourself in the process. Whoopsie! 
        `,
        health: -50,
        gold: 0
    }, {
        id: 'run',
        description: 'Run away!',
        result: `
            You now live to fight another day.
        `,
        health: 0,
        gold: 0
    }, {
        id: 'fight',
        description: 'Attack them with everything you got! Except nukes..',
        result: `
            You have won the battle and rewarded the alien loot!
        `,
        health: 50,
        gold: 50
    }]
};

const sneak = {
    id: 'sneak',
    title: 'Queens Nest',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'trap.jpg',
    action: 'dragon-growl.aiff',
    description: `
        You heard bugs sleep at night, so you and some brave roughnecks 
        decide to pull a sneak attack in the dead of night. But just as
        everything is going according to plan, the bugs seem to begin an attack 
        and now you're outnumbered 50 to 1!
    `,
    choices: [{
        id: 'run',
        description: 'Call in rescue ships!',
        result: `
            The bugs destroyed your rescue ships and you've lost most 
            of your squad! Now you are stuck on the planet until 
            the next transport ship can come but you live to fight another day.
        `,
        health: -50,
        gold: 50
    }, {
        id: 'fight',
        description: 'Fight tooth and nail until every bug is dead!',
        result: `
            You fight until all your ammo is gone and most of your soldiers have
            perished. You are wounded but have succeeded in taking the nest!
        `,
        health: -15,
        gold: 100
    }, {
        id: 'air support',
        description: 'Call in air support to drop bombs on the bugs before you enter the nest!',
        result: `
            You call in the big guns and lay seige to all the poor alien bugs. But,
            unsuspectingly the bugs were on there way to extend a peace treaty deal 
            with the human race. You have won the battle but now you have stirred
            up an even bigger war!
        `,
        health: 0,
        gold: 0
    }]
};

const boss = {
    id: 'boss',
    title: 'Klendathu',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'bigBug.jpg',
    description: `
        The final boss bugs emerges and you need to make a quick move in order to save humanity, 
        what do you do!?
    `,
    choices: [{
        id: 'kill',
        description: 'Squash the bug!',
        result: 'You have won! But you fear there may be more out there.. Somewhere. Waiting for the right moment to strike again.',
        health: 0,
        gold: 1
    }, {
        id: 'capture',
        description: 'Take it prisoner',
        result: 'You study and learn from this bug and in turn you are able to protect humanity from future annihilation.',
        health: 50,
        gold: 100
    }, {
        id: 'mercy',
        description: 'Have mercy and let it go..',
        result: 'WHOOPS. Bad move. Now they have time to rebuild and then they decide to blow up your planet!',
        health: -100,
        gold: 0
    }]
};

const quests = [
    arachnids, 
    sneak,
    boss,
];

export default quests;