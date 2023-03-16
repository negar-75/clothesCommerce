import fs from "fs";
import path from "path";

function handler(req, res) {
  switch (req.method) {
    case "POST": {
      const {
        body: {
          firstName,
          lastName,
          email,
          password,
          repeatPassword,
          adress,
          zip,
        },
      } = req;
      const newUser = {
        id: new Date().toISOString(),
        firstName,
        lastName,
        email,
        password,
        repeatPassword,
        adress,
        zip,
      };

      const filePath = path.join(process.cwd(), "data", "users.json");

      const fileData = fs.readFileSync(filePath);

      const data = JSON.parse(fileData);

      data.push(newUser);

      fs.writeFileSync(filePath, JSON.stringify(data));

      res.status(201).json({ message: "user has been created", user: newUser });
    }
  }
}

export default handler;
