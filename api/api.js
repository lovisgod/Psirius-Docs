import express  from "express";
import router from "./router/router";


const app = express();
app.use(express.json());
app.use('/api/v1', router);

const port = process.env.PORT || 5000;

app.listen(port, function(){
    console.log('connecting through port ' + port + "...... please wait ");
});