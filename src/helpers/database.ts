import firebase from 'firebase';
import _ from "lodash";
import ENV from '../config';
import { freeAgents } from "../static_data.json"

firebase.initializeApp({
    apiKey: ENV.FIREBASE_API_KEY,
    authDomain: ENV.FIREBASE_AUTH_DOMAIN,
    databaseURL: ENV.FIREBASE_DATABASE_URL,
    projectId: ENV.FIREBASE_PROJECT_ID,
    storageBucket: ENV.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: ENV.FIREBASE_MESSAGING_SENDER_ID,
    appId: ENV.FIREBASE_APP_ID,
    measurementId: ENV.FIREBASE_MEASUREMENT_ID
});

const database = firebase.database();

export const getStoredAgents = async (userId: string): Promise<any> => {
    const ref = database.ref('users/' + userId);
    const result = await ref.once('value');

    if (result.val() == null) {
        for (let agent of freeAgents) {
            setDatabase(userId + '/agents/', agent, true);
        }
    }

    return result.val();
}

export const getOwnedAgents = async (userId: string): Promise<Array<string>> => {
    let ownedAgents = await getStoredAgents(userId);

    return Object.keys(_.pickBy(ownedAgents.agents));
}

// Example usage:  
// path = userId + '/agents/'
// setDatabase(path, "Omen", true);
export const setDatabase = (path: string, key: string, value: string | number | boolean) => {
    database.ref('users/' + path).update({
        [key]: value
    })
}
