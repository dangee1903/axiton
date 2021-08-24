const mongoose = require('mongoose')
require('dotenv').config()

const connectUrl = (process.env.NODE_ENV === 'production') ? process.env.MONGODB_PRODUCT : process.env.MONGODB_LOCAL
mongoose.connect(connectUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
})