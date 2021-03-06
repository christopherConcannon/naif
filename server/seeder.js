import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
	try {
		await Order.deleteMany()
		await Product.deleteMany()
		await User.deleteMany()

		const createdUsers = await User.insertMany(users)

		const adminUser = createdUsers[0]._id

		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser }
		})

		await Product.insertMany(sampleProducts)

		console.log('Data imported'.green.inverse)
		process.exit()
	} catch (error) {
		console.log(`${error}`.red.inverse)
		process.exit(1)
	}
}

const destroyData = async () => {
	try {
		await Order.deleteMany()
		await Product.deleteMany()
		await User.deleteMany()

		console.log('Data destroyed'.red.inverse)
		process.exit()
	} catch (error) {
		console.log(`${error}`.red.inverse)
		process.exit(1)
	}
}

// check for -d flag in terminal command
if (process.argv[2] === '-d') {
	destroyData()
} else {
	importData()
}

// to import data
// node server/seeder

// to destroy data
// node server/seeder -d

// also add script to package.json to make shortcuts available
// "data:import": "node server/seeder",
// "data:destroy": "node server/seeder -d"
