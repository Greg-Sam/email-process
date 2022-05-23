module.exports = require('mongoose').connect(process.env.MONGODB_URI || process.env.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected '))
  .catch(err => {
    console.error(err.message)
    process.exit(1)
  })


// module.exports = require('mongoose').connect('mongodb://localhost/pickem', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('MongoDB Connected'))
//   .catch(err => {
//     console.error(err.message)
//     process.exit(1)
//   })