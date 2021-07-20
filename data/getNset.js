const USER = 'USER';

export function getUser(){
    const userString = localStorage.getItem(USER);
    return JSON.parse(userString);
}

export function saveUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem(USER, userString);
}

export function findById(array, idProperty) {
    for (let item of array) {
        if (item.id === idProperty) {
            return item;
        }
    }
}