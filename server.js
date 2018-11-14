const mongoose = require("mongoose");
const app = require("express")();
app.use(require("body-parser").urlencoded({ extended: false }));
app.listen(process.env.PORT || 5000, () => console.log("Listening"));
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
