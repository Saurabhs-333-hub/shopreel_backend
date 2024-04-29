import express from "express";
const app = express();
import cors from "cors";
const port = 3000;
import routes from "../apis/routes.js";
import 'dotenv'
import { config } from 'dotenv'
config(
    {
        path: './.env'
    }

)
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/', routes);

app.use((req, res, next) => {
    if (req.url === '/') {
        res.redirect('/api');
        next();
    }
})




app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});

export default app;