import express from 'express';
import routes from './routes/test.routes';
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/test', routes);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))