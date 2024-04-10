const UsersController = require("../controllers/users");

const usersController = new UsersController();

module.exports = server => {
    server.post('/signup', (req, res) => {
        usersController.signup(req, res);
    });
    server.post('/login', (req, res) => {
        usersController.login(req, res);
    });
    server.post('/editStatus', (req, res) => {
        usersController.editStatus(req, res);
    });
}