const express = require("express");

// const handleALLRequests = (requestobject, responseobject) => {
//   console.log("Request received");
//   console.log(requestobject);

//   const url = requestobject.url;
//   responseobject.setHeader("content-type", "text/html");
//   responseobject.write("Page not found");
//   responseobject.end();
// };

const handleHomeRequest = (req, res) => {
  res.send("Hello, Elijah welcomes you"); //html can be typed eg; responseobject.write("<h1><h1>")
};

const handleServiceRequest = (req, res) => {
  res.send("How can I help you"); //html can be typed eg; responseobject.write("<h1><h1>")
};

const handleContactRequest = (req, res) => {
  res.send("Contact page"); //html can be typed eg; responseobject.write("<h1><h1>")
};

const handleTrashRequest = (req, res) => {
  res.send("Items deleted!"); //html can be typed eg; responseobject.write("<h1><h1>")
};

const server = express();

server.delete("/Trash", handleTrashRequest);
server.put("/Contact", handleContactRequest);
server.post("/Service", handleServiceRequest);
server.get("/", handleHomeRequest);
// server.use(handleALLRequests);

server.listen(3000, "0.0.0.0", () =>
  console.log(
    "Hello, Elijah welcomes you and server is ready to accept request"
  )
);
