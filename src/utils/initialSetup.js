
import Role from "../models/roles.models.js";
import User from "../models/users.models.js";

import bcrypt from "bcryptjs";

export const createRoles = async () => {
  try {
    // Count Documents
    const count = await Role.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;

    // Create default Roles
    const values = await Promise.all([
      new Role({ name: "admin" }).save(),
      new Role({ name: "invent" }).save(),
      new Role({ name: "cont" }).save(),
      new Role({ name: "sale" }).save(),
      new Role({ name: "user" }).save(),
    ]);
    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export const createAdmin = async () => {
  // check for an existing admin user
  const user = await User.findOne({ username: "admin" });

  if (!user) {
    // create a new admin user
    await User.create({
      name: "admin",
      username: "admin",
      email: "admin@localhost",
      password: await bcrypt.hash("admin", 10),
      roles: ["618e904df1dfe3d409774e76"],
    });
    console.log('Admin User Created!')
  }
};