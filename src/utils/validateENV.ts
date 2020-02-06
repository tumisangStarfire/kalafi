import envalid, { cleanEnv, str, port } from 'envalid';

//ensure that program only runs when all of its environment dependencies are met 

export function validateEnv() {
    cleanEnv(process.env, {
        DB_HOST: str(),
        DB_DATABASE: str(),
        DB_USERNAME: str(),
        DB_PASSWORD: str(),
        PORT: port(),
        NODE_ENV: str(),

    });
}
