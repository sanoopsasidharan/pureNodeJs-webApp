const jwt = require("jsonwebtoken");

module.exports = {
  // shop access token
  AccessToken: (user) => {
    console.log(user._id, "fuking users");
    const id = user._id + "";
    const name = user.name;
    return new Promise((resolve, rejcet) => {
      const payload = {
        name,
        id,
      };
      console.log(payload, "payload");
      console.log(
        process.env.ACCESS_TOKEN_SECRET,
        "process.env.ACCESS_TOKEN_SECRET"
      );
      const secret = process.env.ACCESS_TOKEN_SECRET;
      const options = {
        expiresIn: "1y",
        issuer: "sanoopsasidharan.tech",
        audience: id,
      };
      jwt.sign(payload, secret, options, (err, token) => {
        if (err) {
          rejcet();
        } else {
          resolve(token);
        }
      });
    });
  },
  verifyToken: async (req, res, next) => {
    try {
      console.log("this is verification fucntion");
      if (!req.cookies.Tocken) return res.json({ user: false });
      const { Tocken } = req.cookies;
      jwt.verify(Tocken, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err) {
          return res.json({ user: false });
        } else {
          req.payload = payload;
          next();
        }
      });
    } catch (error) {
      next(error);
    }
  },
};
