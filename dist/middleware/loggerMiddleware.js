import * as express from 'express';
function loggerMiddleware(request, response, next) {
    console.log(`${request.method} ${request.path}`);
    next();
}
const app = express();
app.use(loggerMiddleware);
app.get('/hello', (request, response) => {
    response.send('Hello world!');
});
app.listen(5000);
//# sourceMappingURL=loggerMiddleware.js.map