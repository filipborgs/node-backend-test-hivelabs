
import mongoose from 'mongoose'
console.log(`mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`)

export default async (): Promise<any> => mongoose.connect(
  `mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() =>
  console.log('Mongodb conectado')
).catch((e) =>
  console.log(`Erro ao se conectar com o mongodb ${e}`)
)
