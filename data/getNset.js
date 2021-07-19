const USER = 'USER';

export function getUser(){
    const userString = localStorage.getItem(USER);
    return JSON.parse(userString);
}

export function setUser(userObject){
    // stringify the userObject
    const userString = JSON.stringify(userObject);
    // set in local storage
    localStorage.setItem(USER, userString);
}