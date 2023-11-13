import express from "express";
import { config } from "dotenv";

config();

const port = process.env.PORT || 4001;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const {day} = req.query; //Desestructuring 
    return res.status(200).send({ message: `Hello ${day}` });
  });

app.get("/:month", (req, res) => {
  const {month} = req.params; //Desestructuring 
    return res.status(200).send({ message: `Hello ${month}` });
  }
);

app.post("/", (req, res) => {
  const {name, age} = req.body; //Desestructuring 
  if (!name || !age) {
    return res.status(400).send({ message: "Missing datas" });
  }
    return res.status(200).send({ message: `Hello ${name} ${age} yers old` });
  }
);

app.put("/:id", (req, res) => {
  const {id} = req.params; //Desestructuring
  const {name, age} = req.body; //Desestructuring
  if (!name || !age) {
    return res.status(400).send({ message: "Missing datas" });
  }
    return res.status(200).send({ message: `User ${id} updated` });
  }
);

app.delete("/:id", (req, res) => {
  const {id} = req.params; //Desestructuring
    return res.status(200).send({ message: `User ${id} deleted` });
  }
);


  app.listen(port, () =>
  console.log(`😶‍🌫️ Server started on http://localhost:${port}`)
);
