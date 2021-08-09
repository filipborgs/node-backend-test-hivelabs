import { HttpResponse } from '../protocols/http'

export const ok = (content: any): HttpResponse => {
  return {
    statusCode: 200,
    body: content
  }
}

export const created = (content: any): HttpResponse => {
  return {
    statusCode: 201,
    body: content
  }
}

export const noContent = (): HttpResponse => {
  return {
    statusCode: 204,
    body: null
  }
}

export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error.message
  }
}

export const notFound = (error: Error): HttpResponse => {
  return {
    statusCode: 404,
    body: error.message
  }
}

export const conflict = (error: Error): HttpResponse => {
  return {
    statusCode: 409,
    body: error
  }
}

export const serverErro = (error: Error): HttpResponse => {
  return {
    statusCode: 500,
    body: error
  }
}
