import mongoose from 'mongoose'
import { MONGODB_URI } from '../config.js'

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('💽 DB connected')
  } catch (e) {
    console.error(e)
  }
}