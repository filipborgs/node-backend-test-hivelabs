import { Request, Response } from 'express'
import Controller from '../protocols/controller'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      body: { ...req.body }
    }
    const { statusCode, body } = await controller.handle(request)
    if (statusCode >= 200 && statusCode <= 299) {
      res.status(statusCode).json(body)
    } else {
      res.status(statusCode).json(body)
    }
  }
}
