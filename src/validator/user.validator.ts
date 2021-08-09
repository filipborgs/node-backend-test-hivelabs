import { checkSchema } from 'express-validator'

export default {
  store: checkSchema({
    name: {
      trim: true,
      notEmpty: true,
      errorMessage: 'O nome é obrigatorio'
    },
    lastname: {
      trim: true,
      notEmpty: true,
      errorMessage: 'O sobrenome é obrigatorio'
    },
    nickname: {
      trim: true,
      notEmpty: true,
      errorMessage: 'O nickname é obrigatorio',
      isLength: {
        errorMessage: 'O nickname deve conter até 30 caracteres',
        options: { max: 30 }
      }
    },
    address: {
      trim: true,
      notEmpty: true,
      errorMessage: 'O endereço é obrigatorio'
    },
    bio: {
      trim: true
    }
  }),

  update: checkSchema({
    lastname: {
      trim: true
    },
    address: {
      trim: true
    }
  }),

  updateNickname: checkSchema({
    newNickname: {
      trim: true,
      notEmpty: true,
      errorMessage: 'O nickname é obrigatorio',
      isLength: {
        errorMessage: 'O nickname deve conter até 30 caracteres',
        options: { max: 30 }
      }
    }
  })
}
