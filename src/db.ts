
import mongoose from 'mongoose'

export default async (): Promise<any> => mongoose.connect('mongodb://localhost:27017/challengedb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() =>
  console.log('Mongodb conectado')
).catch((e) =>
  console.log(`Erro ao se conectar com o mongodb ${e}`)
)
