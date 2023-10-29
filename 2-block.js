const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.end(`Home page.`);
  } else if (req.url === "/about") {
    //Blocking CODE!! So blocking event loop
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
          console.log(`${i} ${j}`);
        }
      }
    res.end(`About page.`);
  } else {
    res.end(`Default page.`);
  }
});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});