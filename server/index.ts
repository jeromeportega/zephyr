const express = require('express');
import * as next from 'next'

const port: Number = parseInt(<string>process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express();

    server.get('/profile/:id', (req, res) => {
      /**
       * How we're going to be showing different pages on the same route conditionally.
       */
      if (req.params.id !== 'andersblom' && req.params.id !== 'jerryortega') {
        return app.render(req, res, '/profile/notFound', { id: req.params.id });  
      }
      return app.render(req, res, '/profile', { id: req.params.id });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })