import axios from "axios";
import qs from "qs";

export async function GetIdAndToken(code) {
  const url = "https://oauth2.googleapis.com/token";

  const values = {
    code,
    client_id:
      "332784627645-0g7mcki8nikalsnvs40eefgp5elnflc2.apps.googleusercontent.com",
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: "http://localhost:3000/users/login/google",
    grant_type: "authorization_code",
  };
  const res = await axios.post(url, qs.stringify(values), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
}
