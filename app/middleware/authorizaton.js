const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const userModel = require("../models/user");
require("dotenv").config();

module.exports = async function middleware(req, res, next) {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const data = jwt.verify(token, process.env.JWT_KEY);
        const user = await userModel.find({ token: token });
        if (!user) {
            throw new Error();
        }
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send({ error: "Not authorized to access this resource" });
    }
};