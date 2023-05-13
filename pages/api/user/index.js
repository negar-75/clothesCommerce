import { MongoClient } from "mongodb";

// export const filePath = () => {
//   return path.join(process.cwd(), "data", "users.json");
// };
// export const extractData = (filePath) => {
//   const fileData = fs.readFileSync(filePath);

//   const data = JSON.parse(fileData);

//   return data;
// };
export default async function handler(req, res) {
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
          firstName,
          lastName,
          email,
          password,
          repeatPassword,
          adress,
          zip,
        };

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
          await db.collection("accounts").insertOne(newUser);
          res.status(201).json({ newUser });
          client.close();
        } catch (err) {
          res.status(500).json({ message: "inserting data has failed" });
        }

        // const path = filePath();

        // const data = extractData(path);

        // data.push(newUser);

        // fs.writeFileSync(path, JSON.stringify(data));
        // res
        //   .status(201)
        //   .json({ message: "user has been created", user: newUser });
        break;
      }

      default: {
        res.status(200).json("only post method available");
        break;
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export const config = {
  api: {
    bodyParser: {
      json: true,
      limit: "1mb",
    },
  },
};
