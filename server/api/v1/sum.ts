import express from 'express'
import SumRequest from '../../types/SumRequest'
import SumResponse from '../../types/SumResponse'

const router: express.Router = express.Router()

router.post('/', (req: express.Request<SumRequest>, res: express.Response<SumResponse>) => {
  const sum: number = Number(req.body.numberOne) + Number(req.body.numberTwo)

  res.send({ sum })
})

export default router;
