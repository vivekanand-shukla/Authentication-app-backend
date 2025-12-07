const express = require(`express`)
const app = express();
require('dotenv').config();
require("./Models/db")
const bodyParser = require('body-parser');
const cors = require('cors');
const  AuthRouter = require("./Routes/AuthRouter")
const  ProductRouter = require("./Routes/ProductRouter")




app.get('/ping', (req, res) => {
    res.send('PONG');
});

const PORT = process.env.PORT || 8080;
app.use(express.json()); 
app.use(bodyParser.json())
app.use(cors({
    origin: [
        "http://localhost:5173",              // React local
         "https://authentication-app-frontned.vercel.app", // Deployed frontend
        "http://localhost:3000"               // optional (Next.js etc)
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use('/auth' , AuthRouter )
app.use('/products' ,ProductRouter   )

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})