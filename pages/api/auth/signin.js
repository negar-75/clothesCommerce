import { filePath, extractData } from "../user";

function handler(req, res) {
  const path = filePath();
  const data = extractData(path);

  switch (req.method) {
    case "POST": {
      const email = req.body.email;
      const password = req.body.password;
      console.log(email, password);
      const user = data.find(
        (user) => user.email === email && user.password === password
      );
      if (!user) {
        res.status(404).json({ error: "user has not been found" });
      }

      res.status(200).json({ user: user });
    }
    default: {
      res.status(405).json({ error: "ONLY POST method is acceptable" });
    }
  }
}

export default handler;
