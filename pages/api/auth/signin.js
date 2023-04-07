import { MongoClient } from "mongodb";

async function handler(req, res) {
  console.log(req);
  switch (req.method) {
    case "POST": {
      const email = req.body.email;
      const password = req.body.password;

      let client;
      try {
        client = await MongoClient.connect(
          "mongodb+srv://nasirinegar:AjxC9qQSf8ybeDOv@cluster0.60qjwcn.mongodb.net/users?retryWrites=true&w=majority"
        );
      } catch (err) {
        res.status(500).json({ message: "database connection has failed" });
        return;
      }

      try {
        const db = client.db();
        const user = await db.collection("accounts").findOne({
          password: password,
          email: email,
        });

        res.status(201).json({ user });
        client.close();
      } catch (err) {
        res.status(500).json({ message: "something is wrong" });
      }
      break;
    }
    default: {
      res.status(200).json({ error: "post method is available" });
      break;
    }
  }
}

export default handler;
