import express,{Request,Response} from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";


const host : string = "192.168.100.252";
const port : number  = 8989;

const app = express();

const corsOptions = {
    origin: "*",
    method: ["GET", "POST", "PUT", "DELETE"],
    credential: true,
    optionsSuccessStatus: 200,
  };

app.use(bodyParser.json());
app.use(cors(corsOptions));


app.get("/", cors(), (req: Request, res:Response) => {
  res.send("servidor ok");
});

const server = http.createServer(app);

server.listen(port, host, async () => {
  
  console.log(`Servidor Rodando http://${host}:${port}/`);
});