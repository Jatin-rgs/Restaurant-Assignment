class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message); // Pass message to the parent Error class
        this.statusCode = statusCode; // Attach the statusCode to the instance
    }
}


export const errorMiddleware = (err,req,res,next)=>{
    err.message = err.message || "Internal Server Error!";
    err.statusCode = err.statusCode || 500;

    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

export default ErrorHandler;