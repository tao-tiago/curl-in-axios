import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send({ message: "world" });
});

app.post("/", (req, res) => {
  res.send({ message: "world" });
});

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`);
});

export default app;
