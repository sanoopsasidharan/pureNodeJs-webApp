const User = require("../model/UserModel");

const createUser = async (name, email, password, number) => {
  return new Promise((response, reject) => {
    // User.findOne({email:email})

    const user = new User({ name, email, password, number, plan: "Silver" });
    user
      .save()
      .then((res) => {
        response(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
  // try {
  //   console.log(name, email, password, number);
  //   const registerUser = await User.findOne({ email })
  //   console.log(registerUser);
  //   const user = new User({ name, email, password, number, plan: "Silver" });
  //   user.save(function (err, user) {
  //     if (err) {
  //       return { register: false };
  //     } else {
  //       return { register: true };
  //     }
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
};

const loginUser = (email, password) => {
  return new Promise((resolv, reject) => {
    User.findOne({ email })
      .then((result) => {
        if (result?.password === password) {
          console.log(result.password === password);
          console.log(result);
          resolv(result, { loggedIn: true });
        } else {
          reject({ loggedIn: false });
        }
      })
      .catch((err) => {
        console.log(err);
        reject({ loggedIn: false });
      });
  });
};

module.exports = {
  createUser,
  loginUser,
};
