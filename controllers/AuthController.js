import bcrypt from 'bcrypt'
import User from '../models/User.js'


const Max_Age = 3 * 24 * 60 * 60;
const createTocken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: Max_Age
  })
}

export const register = async (req, res) => {

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hash
  })

  const existEmail = await User.findOne({ email: req.body.email })

  console.log(existEmail);
  if (existEmail) {
    try {
      res.send(400).json("email is already existed")

    } catch (error) {
      res.status(500).json(error)
    }

  }else
  {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser)
    res.status(500).json(" error is occured")
  }


}

export const doLogin = async (req, res) => {
  console.log("hiii");
  try {

    const { email, password } = req.body;

    console.log(req.body);
    const users = await User.findOne({ email: req.body.email })
    console.log(users);



    res.status(200).json("user is loged in")


  } catch (error) {
    res.status(500).json()
    console.log(error);
  }
} 