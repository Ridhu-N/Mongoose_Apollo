const User = require("./models/user");

const Mutations = {
  Query: {
    getAllUsers: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    },
  },
  Mutation: {
    createUser: async (_, args) => {
      const { first_name, last_name, email, password } = args;
      try {
        const newUser = new User({
          first_name,
          last_name,
          email,
          password,
        });

        const savedUser = await newUser.save();
        return savedUser;
      } catch (error) {
        throw new Error("Failed to create user");
      }
    },
  },
};

module.exports = Mutations;
