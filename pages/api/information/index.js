import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  async (req, res) => {
    if (req.method === "POST") {
      console.log(req.body);

      req.session.data = req.body;
      await req.session.save();

      res.status(200).json({ message: "information stored in session." });
    } else res.status(402).json({ message: "post method just is available" });
  },
  {
    password: process.env.SESSION_SECRET,
    cookieName: "session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);
