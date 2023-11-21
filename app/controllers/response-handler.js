export const setResponse = (data, response) => {
    response.status(200)
    .json(data);
}

export const setInternalServerErrorResponse = (err,response) => {
    response.status(500)
    .json({
        code : "500 Internal Server Error",
        message: "Error occurred while processing your request."
    });
}

export const setUserExistsErrorResponse = (err,response) => {
    response.status(409)
    .json({
        code : "409 User already Exists",
        message: "Could not create a user as user already exists."
    });
}

export const setErrorResponse = (err, response) => {
    response.status(500)
        .json({
            code: "ServiceError",
            message: "Error occured while processing request."
        })
}