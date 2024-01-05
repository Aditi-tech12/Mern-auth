// app.get("/",(req,res)=>{
//     res.status(200).send("Welcome to MERN Series")
// })

// app.get("/register",(req,res)=>{
//     res.status(200).send("Welcome to Register Page")
// })

const express = require("express")
const router = express.Router()
// const {home,register} = require("../controllers/auth-controller")
//here if you create many routes then this will increase so do like this
const authcontroller = require("../controllers/auth-controller")


router.route("/").get(authcontroller.home)
router.route("/register").post(authcontroller.register)
router.route("/login").post(authcontroller.login)

module.exports = router;