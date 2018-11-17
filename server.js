const mongoose = require("mongoose");
const express = require('express')
const app = express();
const path = require('path')
app.use(require("body-parser").urlencoded({ extended: false }));
app.listen(process.env.PORT || 8080, () => console.log("Listening"));
mongoose.connect(
  "mongodb://pectometro:pectometro17@ds259912.mlab.com:59912/pectometro",
  err => console.log(err)
);
const Message = mongoose.model("Message", {
  text: String,
  pec: String,
  username: String,
  userEmail: String
});
app.post("/message", (req, res) =>
  new Message(req.body).save().then(response => res.send(response))
);
app.get("/messages/:pec", (req, res) => {
  console.log(req)
  return Message.find({ pec: req.params.pec }, (err, messages) =>
    err
      ? res.send({ message: "Algo deu errado, tente novamente" })
      : res.send({ messages })
  );
});

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public'));
});
