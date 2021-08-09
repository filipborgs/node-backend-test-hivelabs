import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import Controller from '../protocols/controller'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.mapped())
    }

    const request = {
      body: { ...req.body },
      params: { ...req.params },
      query: { ...req.query }
    }

    const { statusCode, body } = await controller.handle(request)
    if (statusCode >= 200 && statusCode <= 299) {
      res.status(statusCode).json(body)
    } else {
      res.status(statusCode).json(body)
    }
  }
}
