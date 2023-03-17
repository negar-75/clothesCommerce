import fs from "fs";
import path from "path";

export const filePath = () => {
  return path.join(process.cwd(), "data", "users.json");
};
export const extractData = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  console.log(fileData);
  const data = JSON.parse(fileData);
  console.log(data);
  return data;
};
function handler(req, res) {
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
        console.log(typeof path);
        const data = extractData(path);
        console.log(data);
        data.push(newUser);
        fs.writeFileSync(path, JSON.stringify(data));
        res
          .status(201)
          .json({ message: "user has been created", user: newUser });
      }

      default: {
        const path = filePath();
        console.log(path);
        const data = extractData(path);
        res.status(200).json({ users: data });
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export default handler;
