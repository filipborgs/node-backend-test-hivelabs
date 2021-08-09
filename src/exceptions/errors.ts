export class NotFoudError extends Error {
  constructor (resource) {
    super(`${resource} não encontrado`)
    super.name = 'NotFoudError'
  }
}

export class MissingParamError extends Error {
  constructor (param) {
    super(`${param} ausente na requisição`)
    super.name = 'MissingParamError'
  }
}

export class FieldTakenError extends Error {
  constructor (field) {
    super(`${field} já está sendo usado`)
    super.name = 'FieldTakenError'
  }
}
