import * as http from 'http';
import { app } from '../app';
import { serverPort, mongoUrl } from '../config';
import * as mongoose from 'mongoose';

const port = process.env.PORT || serverPort;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
    mongoose.connect(mongoUrl);
  });
