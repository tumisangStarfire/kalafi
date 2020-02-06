import {
    App
} from './app';
import { validateEnv } from './utils/validateENV'


validateEnv();

async function main() {
    const app = new App();
    app.listen()
}

main();