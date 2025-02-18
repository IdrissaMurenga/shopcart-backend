import mongoose from "mongoose"
export const mongoDbconnect = (app) => {

    const mongodb_url = process.env.MONGODB_URL

    mongoose.connect(mongodb_url)
        .then(() => {
            const port = process.env.PORT
            app.listen(() => console.log(`Server is running on port ${port}...`))
        })
        .catch((err) => console.log(err));
}