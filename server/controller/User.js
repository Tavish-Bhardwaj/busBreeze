// const User = require("../model/User");
// const bcrypt = require("bcrypt");


// // require("dotenv").config();
// async function handleCreateNewUser(req, res) {
//     console.log("inside the sign up route");
//   const { name, email, contactNo, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   await User.create({ name, email, password: hashedPassword, contactNo  });
  
//   res.json({ auth: true });
// }

// async function handleLoginUser(req, res) {
//     console.log("inside the login route");
//   const { email, password } = req.body;
//   // console.log("HEllo " + email);
//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).send({ error: "User doesn't exists!" });
//   const passwordMatch = await bcrypt.compare(password, user.password);
//   console.log(passwordMatch);
//   if (passwordMatch) {
   
//     res.json({  auth: true });
//   } else {
//     return res.status(400).send({ error: "Invalid Password" });
//   }
// }

// // async function handlegetUserData(req, res) {
// //   const authorizationHeader = req.headers.authorization;
// //   const [ accessToken] = authorizationHeader.split("Bearer ");
// //   if (!accessToken) return res.json({ error: "Access Denied" });

// //   jwt.verify(accessToken, secretKey, (err, user) => {
// //     res.json({ user, success: true });
// //   });
// // }

// module.exports = { handleCreateNewUser, handleLoginUser };
