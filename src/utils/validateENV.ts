import envalid, { cleanEnv, str, port } from 'envalid';

//ensure that program only runs when all of its environment dependencies are met 

export function validateEnv() {
    cleanEnv(process.env, {
        MONGO_Url: str(),
        MONGO_DATABASE: str(),
        MONGO_USER: str(),
        MONGO_PASSWORD: str(),
        PORT: port(),
        NODE_ENV: str(),

    });
}
