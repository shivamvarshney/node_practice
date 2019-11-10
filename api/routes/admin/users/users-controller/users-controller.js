var userObj = require('../../../../models/User');

function usersList(req, resp) {
    resp.send({ products: [] });
}

function user(req, resp) {

    let userData = {};
    userData.user_name = 'Shivam Varshney';
    userData.user_phone = '123456789';
    userData.user_password = 'Shivam@123';
    userData.user_email = 'shivam.gmail.com';

    var mykartData = new userObj(userData);
    mykartData.save().then(item => {
        console.log('Varshney Ji');
        resp.send(item);
    });
}

exports.usersList = usersList;
exports.user = user;