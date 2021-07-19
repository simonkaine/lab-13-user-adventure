import { makeUser } from './make-user.js';
import { saveUser } from '../data/getNset.js';

const userFormSubmit = document.getElementById('user-input');

userFormSubmit.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(userFormSubmit);
    const newUser = makeUser(formData);

    saveUser(newUser);

    window.location.replace('./map');
});

