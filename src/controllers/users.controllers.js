import User from "../models/users.models.js";
import Role from "../models/roles.models.js";

import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;
    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password),
    });
    if (req.body.roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }
    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, "secret", {
      expiresIn: 86400,
    });
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const signin = async (req, res) => {
  try {
    // Request body email can be an email or username
    const userFound = await User.findOne({
      username: req.body.username,
    }).populate("roles");

    if (!userFound) return res.status(400).json({ message: "User Not Found" });

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });
    console.log(userFound);
    const token = jwt.sign(
      {
        id: userFound._id,
        role: userFound.roles[0].name,
        username: userFound.username,
      },
      "secret",
      {
        expiresIn: 86400, // 24 hours
      }
    );

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};

export const updatedRolesWithUser = async (req, res) => {
  const { username, roles } = req.body;
  console.log(req.body.username);
  console.log(roles);
  const userFound = await User.findOne({ username }).populate("roles");
  const foundRoles = await Role.find({ name: { $in: roles } });
  userFound.roles = foundRoles.map((role) => role._id);
  const user = await userFound.save();
  console.log(foundRoles);
  console.log(user);
  res.json("ok");
};

export const getUsers = async (req, res) => {
  const getUsers = await User.find();
  res.json(getUsers);
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  if (id) {
    const getUser = await User.findById({ _id: id });
    return res.json(getUser);
  }
};

export const getRoles = async (req,res) => {
  const getRoles = await Role.find()
  res.json(getRoles)
}
