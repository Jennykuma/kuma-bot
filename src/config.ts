import * as dotenv from 'dotenv';
dotenv.config();

declare var process: { // don't know why we have to do this for dotenv to work with TypeScript
    env: {
        TOKEN: string,

        FIREBASE_API_KEY: string,
        FIREBASE_AUTH_DOMAIN: string,
        FIREBASE_DATABASE_URL: string,
        FIREBASE_PROJECT_ID: string,
        FIREBASE_STORAGE_BUCKET: string,
        FIREBASE_MESSAGING_SENDER_ID: string,
        FIREBASE_APP_ID: string,
        FIREBASE_MEASUREMENT_ID: string
    }
}

const ENV = {
    TOKEN: process.env.TOKEN,

    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID
}

export default ENV;
