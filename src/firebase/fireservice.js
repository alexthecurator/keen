import { firebase } from 'firebase/database';

const db = firebase.database().ref('../components/elements/getstarted.vue');

class newSubscribers {
    subscribe(subscription) {
        return db.push(subscription)
    }
}

function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}

export default new newSubscribers();