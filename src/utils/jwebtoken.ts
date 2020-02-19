const dotenv = require('dotenv');

dotenv.config();

export const JWT_SECRET_KEY = process.env.JWT_SECRET;

if (!JWT_SECRET_KEY) {
    console.log("No JWT secret string. Set JWT_SECRET environment variable.");
    process.exit(1);
}