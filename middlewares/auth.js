import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    console.log('All cookies:', req.cookies); // Debug line
    console.log('Headers:', req.headers); // Debug line
    
    let token = req.cookies.token;
    
    // If no token in cookies, check Authorization header
    if (!token && req.headers.authorization) {
        token = req.headers.authorization.split(' ')[1]; // Bearer token
    }
    
    console.log('Token from cookies:', token); // Debug line
    if (!token) {
        return next(new ErrorHandler("User Not Authenticated!", 400));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    next();
})