import fs from "fs";
import path from "path";

export const filePath = () => {
  return path.join(process.cwd(), "data", "users.json");
};
export const extractData = (filePath) => {
  const fileData = fs.readFileSync(filePath);

  const data = JSON.parse(fileData);

  return data;
};
export default function handler(req, res) {
  console.log(req);
  try {
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

        const path = filePath();

        const data = extractData(path);

        data.push(newUser);
        console.log(newUser);
        console.log(JSON.stringify(data));
        fs.writeFileSync(path, JSON.stringify(data));
        res
          .status(201)
          .json({ message: "user has been created", user: newUser });
      }

      default: {
        const path = filePath();
        const data = extractData(path);
        res.status(200).json({ users: data });
      }
    }
  } catch (err) {
    console.log(err);
  }
}
