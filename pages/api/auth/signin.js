import { filePath, extractData } from "../user"; //TODO : FIX THE BUG

function handler(req, res) {
  const path = filePath();
  const data = extractData(path);

  try {
    console.log(req.method);
    switch (req.method) {
      case "POST": {
        const email = req.body.email;
        const password = req.body.password;

        const user = data.find(
          (user) => user.email === email && user.password === password
        );

        if (!user) {
          res.status(404).json({ error: "user has not been found" });
        } else {
          res.status(200).json({ user });
        }
      }
      default: {
        res.status(200).json({ error: "post method is available" });
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export default handler;
