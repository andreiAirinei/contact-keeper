const mongoose = require('mongoose');

const config = require('config');
const db = config.get('mongoURI');

// ASYNC AWAIT connection
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Promises connection

// const connectDB = () => {
//   mongoose
//     .connect(db, {
//       useNewUrlParser: true,
//       // useCreateIndex: true,
//       // useFindAndModify: false,
//       useUnifiedTopology: true
//     })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => {
//       console.error(err.message);
//       process.exit(1);
//     });
// };

module.exports = connectDB;