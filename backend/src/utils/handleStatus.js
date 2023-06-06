
const handleError = (statusCode, message) => {
    return {
        status: statusCode,
        message: message
    }
}

const handleSuccess = (statusCode, message, data) => {
    return {
        status: statusCode,
        message: message,
        response: data,
    }
}

module.exports = {
    handleError,
    handleSuccess
};
