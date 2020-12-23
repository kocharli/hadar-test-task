import express from 'express'
import sum from './api/v1/sum'

const app: express.Application = express()

app.use(express.json())

app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  'OPTIONS' == req.method ?
    res.sendStatus(200) :
    next();
});

app.use('/api/sum', sum)

app.listen(5000, () => console.log('App listening on port 5000'))
