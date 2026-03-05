const jwt = require("jsonwebtoken");

const checkUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        req.user = null;
        return next();
    }
    try {
        const verified = jwt.verify(token, "JWT_secret_key");
        req.user = verified;
        next();
    } catch (err) {
        req.user = null;
        next();
    }
};

const isLoggedIn = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.redirect("/login");

    try {
        const verified = jwt.verify(token, "JWT_secret_key");
        req.user = verified;
        next();
    } catch (err) {
        return res.redirect("/login");
    }
};

module.exports = { checkUser, isLoggedIn };