const mongoose = require("mongoose")

const { DB_URL } = process.env

exports.connect = () => {
    mongoose.connect(DB_URL)
        .then(() => console.info("Database connection established"))
        .catch(err => {
            console.error("Database connection failure", err)
            process.exit(1)
        })
}