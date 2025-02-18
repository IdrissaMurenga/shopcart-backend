import express from 'express'
import dotenv from 'dotenv'
import { createYoga, createSchema } from 'graphql-yoga'
import { mongoDbconnect } from './db/mongodb.js'


// Load environment variables from .env file    
dotenv.config()

// Initialize Express app
const app = express();

// // Create GraphQL server using Yoga
// const yoga = createYoga({
//     schems: createSchema({})
// })

// Connect to MongoDB
mongoDbconnect(app)