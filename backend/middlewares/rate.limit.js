import rateLimit from "express-rate-limit"

export const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 500,
    message:{
        message: "Your blocked, wait 10 minutes"
    }
})