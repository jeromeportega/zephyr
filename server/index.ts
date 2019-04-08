const express = require('express');
import * as next from 'next';

const port: Number = parseInt(<string>process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const profileRoutes = require('./routes/profile');

app.prepare()
  .then(() => {
    const server = express();

    server.use(express.json());

    // Import Routes
    profileRoutes({ server, app });

    // Root route
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });