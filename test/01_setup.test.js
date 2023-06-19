process.env.NODE_ENV = 'test';

const boards = require('../models/project');
const User = require('../models/user');


//clean up the database before and after each test
beforeEach((done) => { 
    project.deleteMany({}, function(err) {});
    User.deleteMany({}, function(err) {});
    done();
});

afterEach((done) => {
    project.deleteMany({}, function(err) {});
    User.deleteMany({}, function(err) {});
    done();
});