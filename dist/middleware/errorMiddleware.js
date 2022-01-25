"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = (request, response, next) => {
    const error = new Error(`Not Found - ${request.originalUrl}`);
    response.status(404);
    next();
};
exports.errorHandler = (err, request, response, next) => {
    const statusCode = response.statusCode === 200 ? 500 : response.statusCode;
    response.status(statusCode);
    response.json({
        err: err.message,
    });
    next();
};
//# sourceMappingURL=errorMiddleware.js.map