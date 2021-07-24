export function makeUser(formData){
    const newUser = {
        gold: 0,
        health: 100,
        name: formData.get('name'),
        character: formData.get('character'),
        completed: {}
    };
    return newUser;
}