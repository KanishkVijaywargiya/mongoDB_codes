// a mocha helper test file
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;  //ES6 - promise

before((done) => {
    // runs before all tests in this block
    mongoose.connect("mongodb://localhost/mongotube", { useMongoClient: true });
    //es6 promises
    mongoose.connection
        .once('open', () => {
            // console.log('Connected');
            done();
        })
        .on('error', () => {
            console.log("Your Error", error);
        });
});
