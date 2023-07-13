const http = require("http");
const port = 8081;

const toDoList = ["Complete Node Byte", "Play Cricket"];

http
  .createServer((req, res) => {
    const { method, url } = req;

    if (url === "/todos") {
      if (method === "GET") {
        res.writeHead(200);
        res.write(toDoList.toString());
      } else if (method === "POST") {
        let body = "";
        req
          .on("error", (err) => {
            console.error(err);
          })
          .on("data", (chunk) => {
            body += chunk;
            console.log(chunk);
          })
          .on("end", () => {
            body = JSON.parse(body);
            let newToDo = toDoList;
            newToDo.push(body.item);
            console.log("Data:", newToDo);
            res.writeHead(200); // Send a success status code
            res.end(); // End the response
          });
      } else if (method === "DELETE") {
        let body = "";
        req
          .on("error", (err) => {
            console.error(err);
          })
          .on("data", (chunk) => {
            body += chunk;
          })
          .on("end", () => {
            body = JSON.parse(body);
            let toDelete = body.item;
            for (let i = 0; i < toDoList.length; i++) {
              if (toDoList[i] === toDelete) {
                toDoList.splice(i, 1);
                console.log("Item Deleted from Server");
                break;
              }
            }
            res.writeHead(204); // Send a no content status code
            res.end(); // End the response
          });
      } else {
        res.writeHead(501); // Send a not implemented status code
        res.end(); // End the response
      }
    } else {
      res.writeHead(404); // Send a not found status code
      res.end(); // End the response
    }
  })
  .listen(port, () => {
    console.log(`Node started at ${port}`);
  });
