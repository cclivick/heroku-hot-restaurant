var express = require("express")
var path = require("path")
var app = express();
var PORT = process.env.PORT || 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
        name: "Thusius, Bryan",
        phonenumber: "262-555-5555",
        email: "bthusius@gmail.com",
        id: "bryanthuz"
    },
    {
        name: "Livick, Christian",
        phonenumber: "414-777-7777",
        email: "cclivick@gmail.com",
        id: "cclivick" 
    },
    {
        name: "Jensen, Thomas",
        phonenumber: "608-775-6666",
        email: "jensen22@live.com",
        id: "tj113"
    }

];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/newres", function(req, res) {
     res.sendFile(path.join(__dirname, "newRes.html"));
  });

app.get("/resview", function(req, res) {
    res.sendFile(path.join(__dirname, "resView.html"));
  });

app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
});


app.post("/resview", function(req, res) {
  var newRes = req.body;

  newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();

  console.log(newRes);

  tables.push(newRes);

  res.json(newRes);

})