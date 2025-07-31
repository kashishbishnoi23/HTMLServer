// epress.js is one library used with Node.js -> node.js is a big framework, runtime environment => node.js is a server used to run backend code

// index.js is the entry point 


const express = require("express");
const app = express();

let port = 3000;

app.use(express.static("public")); // agar node.js k pass koi static file ki request ayegi to public folder me dhundhega

app.listen(port, function(){
    console.log("Server is running on port http://localhost ", port);
})






// IP ki help se we reach the machine -> to access some service from that machine we need a port number

// ek machine me konsi service pe request jayegi -> decided by port number

// so ab hamari ye service 3000 port pe chal rahi hai

// localhost -> ip address of current machine -> so is ip ke 3000 port number pe Node.js service/process run kar rhi hai 

// 80 is default port for http protocol, 443 for https

