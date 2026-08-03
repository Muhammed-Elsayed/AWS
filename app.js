const express = require("express");

const app = express();

const leads = [
  { id: 1, name: "Ahmed", status: "new" },
  { id: 2, name: "Sara", status: "qualified" },
];

app.get("/", (_req, res) => {
  res.json({ message: "Application deployed successfully" });
});

app.get("/api/leads", (_req, res) => {
  res.json(leads);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("API running on port 3000");
});