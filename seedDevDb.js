import mongoose from 'mongoose'
import mongodb from 'mongodb'
import fs from 'fs'
import { User } from './schema/User.js'
import { Ride } from './schema/Ride.js'
import {
  devUserData,
  devRideData,
  devFileNamesArr,
} from './test-data/dev-seed-data.js'
import connectToDB from './connectToDb.js'
import 'dotenv/config.js'
import bcrypt from 'bcrypt'

const saltRounds = 10
devUserData.forEach((user, i) => {
  bcrypt.hash(user.password, saltRounds).then((hash) => {
    devUserData[i].password = hash
  })
})

const connectionString = process.env.DB_STRING
connectToDB(connectionString)
const client = new mongodb.MongoClient(connectionString)
const connection = mongoose.connection

connection
  .dropDatabase()
  .then(() => {
    const db = client.db('jumpIn')
    const bucket = new mongodb.GridFSBucket(db, { bucketName: 'images' })
    const __dirname = import.meta.dirname
    const promiseArr = []
    devFileNamesArr.forEach((file) => {
      const imagePromise = new Promise((resolve, reject) => {
        const streamWrite = bucket.openUploadStream(file.name, {
          metadata: { username: file.username },
        })
        const transfer = fs
          .createReadStream(`${__dirname}/test-data/${file.name}`)
          .pipe(streamWrite)
        transfer.on('close', resolve)
      })
      promiseArr.push(imagePromise)
    })
    return Promise.all(promiseArr)
  })
  .then((res) => {
    console.log(res.length, ' - images uploaded')
    return User.init()
  })
  .then(() => {
    return User.create(devUserData)
  })
  .then(() => {
    return Ride.create(devRideData)
  })
  .then(() => {
    return User.countDocuments({})
  })
  .then((res) => {
    console.log(res, ' - users created')
    return Ride.countDocuments({})
  })
  .then((res) => {
    console.log(res, ' - rides created')
    console.log('Dev Data Seeding complete')
    process.exit(0)
  })
