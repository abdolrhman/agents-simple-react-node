const express = require('express');
const {Agent} = require('./model');
const cors = require("cors");

const app = express();
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());

app.get('/agents', async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

app.get('/agents/:id', async (req, res) => {
  const {id} = req.params
  const agent = await Agent.findByPk(id);
  return res.json(agent);
});

app.post('/agents', async (req, res) => {
  const {firstName, lastName, photoUrl, agentLicence, address, practiceAreas, aboutMe} = req.body
  const agent = await Agent.create({firstName, lastName, photoUrl, agentLicence, address, practiceAreas, aboutMe});
  return res.json(agent);
});

module.exports = app;
