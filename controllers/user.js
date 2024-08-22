import { User } from "../models/users.js";
import { GetIdAndToken } from "../services/user.js";
import axios from "axios";
export async function LoginWithGoogle(req, res) {
  const { code } = req.query;
  const userAccessData = await GetIdAndToken(code);
  console.log("userAccessData", userAccessData);
  // get user info with the access token
  const userInfoResponse = await axios.get(
    "https://www.googleapis.com/oauth2/v2/userinfo",
    {
      headers: {
        Authorization: `Bearer ${userAccessData.access_token}`,
      },
    }
  );

  const userInfo = userInfoResponse.data;
  console.log("UserInfo", userInfo);
  //upsert user (create if user new or update if user exists)
  const user = await User.findOneAndUpdate(
    { email: userInfo.email }, // Critère de recherche (basé sur l'email)
    {
      username: userInfo.name,
      email: userInfo.email,
      googleId: userInfo.id,
      image: userInfo.picture,
    },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  // resend the user informations
  // res.status(200).json({
  //   message: "User logged in successfully",
  //   user: user,
  // });
  return res.redirect("http://localhost:5173?userId=" + user._id);
}

export async function getOneUser(req, res) {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json({ user });
}
