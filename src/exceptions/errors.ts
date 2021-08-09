export class NotFoudError extends Error {
  constructor (resource) {
    super(`${resource} não encontrado`)
    super.name = 'NotFoudError'
  }
}
