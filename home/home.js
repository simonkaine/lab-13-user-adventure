import { makeUser } from './make-user.js';
const userFormSubmit = document.getElementById('user-input');

userFormSubmit.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(userFormSubmit);
    console.log(formData);
    const newUser = makeUser(formData);
    console.log(newUser);
});

