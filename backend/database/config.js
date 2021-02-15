const mongoose = require('mongoose');

const dbConnetion = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB connected')
    } catch (error) {
        throw new Error('error al iniciar la base');
    }
}

module.exports = {
    dbConnetion
}