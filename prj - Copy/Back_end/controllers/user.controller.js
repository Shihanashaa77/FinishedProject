import User from "../models/user.Models.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
  try {
    const { firstname, lastname, phno, email, password, role } = req.body;

    if (!firstname || !lastname || !phno || !email || !password || !role)
      res.status(400).json({ message: "Some required field(s) missing.", success: false });

    const user = await User.findOne({ email });
    if (user) res.status(400).json({ message: "User already exists with this email.", success: false });


    const Hashedpassword = await bcrypt.hash(password, 10);
    await User.create({
      firstname,
      lastname,
      phno,
      email,
      password: Hashedpassword,
      role,
    });

    return res.status(200).json({
      message: "Account was successfully created.",
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export const logIn = async (req, res) => {
  try {
    // To deconstruct the object from request body
    const { email, password, role } = req.body;

    // To check if any required fields are missing
    if (!email || !password || !role)
      res.status(400).json({
        message: "Some required field(s) are missing!",
        success: false,
      });

    // To check if valid email and password was entered.
    let user = await User.findOne({ email });
    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!user || !isPasswordMatching)
      res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      });

    // To check if valid role was entered.
    if (role != user.role)
      res.status(400).json({
        message: "Account doesn't exist with the entered role.",
        success: false,
      });

    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    user = {
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      phno: user.phno,
      email: user.email,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `${user.firstname} successfully logged in.`,
        user,
        success: true,
      });
  } catch (err) {
    console.log(err);
  }
};

export const logOut = async (req, res) => {
  try {
    // To forget the token stored in cookie
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully.",
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateProfile = async (req, res) => {
  try {
    // To deconstruct the object from request body
    const { firstname, lastname, phno, email, bio, skills } = req.body;
    let skillsArray;
    // To split skills into array elements (based on separator: ",").
    if (skills) skillsArray = skills.split(",");
    // `userid` stores the `id` of object from request body.
    const userid = req.id;
    let user = await User.findById(userid);
    // To check if the user account exists.
    if (!user)
      res.status(400).json({
        message: "User doesn't exist",
        success: false,
      });

    // Updating User data
    if (firstname) user.firstname = firstname;
    if (lastname) user.lastname = lastname;
    if (phno) user.phno = phno;
    if (email) user.email = email;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsArray;
    // To saved the updated data of user.
    await user.save();

    user = {
      firstname: user.firstname,
      lastname: user.lastname,
      phno: user.phno,
      email: user.email,
      bio: user.profile.bio,
      skills: user.profile.skills,
    };

    return res.status(200).json({
      message: "User Updated.",
      user,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};