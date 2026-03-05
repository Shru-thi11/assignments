const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const renderRegister = (req, res) => {
    res.render("register", { result: "" })
};

const register = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    

    if (!firstName || !lastName || !email || !password || !confirmPassword) 
        return res.render("register", { result: "All fields are required!"});



    if (password !== confirmPassword) 
        return res.render("register", { result: "Passwords do not match!" });

    

    const existUser = await User.findOne({ email })
    if (existUser)
        return res.render("register", { result: "User already exists"});

    

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPass
    });

    await newUser.save();
    res.render("register", { result: "Registration was successful! You can login now." });
};

const renderLogin = (req,res) => {
    res.render("login", { result: "" });
};

const login = async (req,res) => {
    const { email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (!existUser) return res.render("login", { result: "User does not exist!" });

    const isCorrectpassword = await bcrypt.compare(password, existUser.password);
    if (!isCorrectpassword) return res.render("login", { result: "Passord is incorrect!"})

    const userToken = jwt.sign(
        {
            id: existUser._id,
            firstName: existUser.firstName,
            lastName: existUser.lastName,
            email: existUser.email
        },
        "JWT_secret_key"
    );

    res.cookie("token", userToken, { httpOnly: true });
    return res.redirect("/posts");
};

const logout = (req,res) => {
    res.clearCookie("token");
    res.redirect("/login");
};


module.exports = {
    renderRegister,
    register,
    renderLogin,
    login,
    logout
}