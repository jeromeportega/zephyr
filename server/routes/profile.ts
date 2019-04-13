const profileRoutes = ({ server, app }) => {
    
    server.get('/profile/:id', (req, res) => {
        /**
         * How we're going to be showing different pages on the same route conditionally.
         */
        if (req.params.id !== 'andersblom' && req.params.id !== 'jerryortega') {
          return app.render(req, res, '/profile/notFound', { id: req.params.id });  
        }
        return app.render(req, res, '/profile', { id: req.params.id });
      });
      
  }
  
  module.exports = profileRoutes;