import * as dotenv from 'dotenv';
dotenv.config();

declare var process : { // don't know why we have to do this for dotenv to work with TypeScript
    env: {
        TOKEN: string
    }
}

const ENV = {TOKEN: process.env.TOKEN}

export default ENV;