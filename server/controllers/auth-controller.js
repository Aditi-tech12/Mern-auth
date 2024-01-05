const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const { use } = require("../router/auth-router");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to the world's best MERN series using Router");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    //hash the password
    const saltRound = 10;
    const hash_password = await bcrypt.hash(password,saltRound)

    const userCreated = await User.create({ username, email, phone, password:hash_password });

    res.status(200).json({ msg: "Registration Successful",
    token:await userCreated.generateToken(),
    userId: userCreated._id.toString() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};


const login= async (req,res)=>{
  try {
    const {email,password} = req.body;

    const userExist = await User.findOne({email});
    console.log(userExist)

    if(!userExist)
    {
      return res.status(400).json({msg:"Invalid Credentials"})
    }

    const user = await bcrypt.compare(password,userExist.password)

    if(user){
      res.status(200).json({ msg: "Login Successful",
      token:await userExist.generateToken(),
      userId: userExist._id.toString(),
     });
    }else{
      res.status(401).json({msg:"Invalid email or password"})
    }
  } catch (error) {
    res.status(500).json("Internal Server Error")
  }
}

module.exports = { home, register ,login };
