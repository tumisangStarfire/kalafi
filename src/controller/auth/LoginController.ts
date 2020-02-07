import { Request, Response } from 'express';
import { User } from 'models/User';
// DB
import { databaseConnector } from '../../database/databaseConnector';

export async function login(request: Request, response: Response) {
    try {
        //TODO login with cellphone or email
        console.log(request.body.email);

        const connection = await databaseConnector();
        let query = 'SELECT * FROM users WHERE email =' + connection.escape(request.body.email) + ' AND firstName =' + connection.escape(request.body.password);

        await connection.query(query, function (connectionErr, rows, fields) {
            if (connectionErr) {
                console.log('error', connectionErr);
            } else {
                if (rows[0]) {
                    console.log(rows[0]);
                    return response.json({ user: rows[0], status: "success", message: "Login succesfull" }).status(200);
                }

            }
        });


    } catch (error) {
        console.log(error);
    }
}

