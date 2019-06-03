import express  from "express";
import router from "./router/router";
import cors from 'cors';
// import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1', router);
const port = process.env.PORT || 7000;

app.listen(port, function(){
    console.log('connecting through port ' + port + "...... please wait ");
});