import firebase from '../../firebase/init';

const db = firebase.ref('../components/elements/getstarted');

class newSubscribers {
    subscribe() {
        return db.push(subscriber)
    }
}

export default new addSubscriber();