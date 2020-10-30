// getting-started.js
const mongoose = require('mongoose');

const User = mongoose.model('User', userSchema);

try {
  mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true});
  logger.info(`Succesfully connected`);

  const db = mongoose.connection;

  // create a document
  const first_user = new User({
    _id: 1,
    name: { first: 'Axl', last: 'Rose' }
  });

  logger.info(`Create the first document`);

  first_user.save(function (err) {
    if (err) return logger.info(`ERROR: ${err}`);
    // saved!
  });

  // or

  // Tank.create({ size: 'small' }, function (err, small) {
  //   if (err) return handleError(err);
  //   // saved!
  // })
  logger.info(`Save the first document`);


} catch (error) {
  logger.info(`ERROR: ${error}`);
}
