import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "ok-get" });
});

app.post("/", (req, res) => {
  const message = req.body.dummy || "nothing";

  res.send({ message });
});

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`);
});

export default app;
