require('dotenv').config();

const Server = require('./models/server');
//const { nodeMailerToClient } = require('./services/nodeMailerToClient');
//const { nodeMailer } = require('./services/nodeMailer');



const server = new Server();

server.listen();

// nodeMailer()

//nodeMailerToClient()


