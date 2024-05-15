'use strict';

module.exports = function (app) {

  app.route('/api/issues/:project')
  
    .get((req, res) => {
      let project = req.params.project;
      
    })
    
    .post((req, res) => {
      let project = req.params.project;

      res.json(project);
      
    })
    
    .put((req, res) => {
      let project = req.params.project;
      
    })
    
    .delete((req, res) => {
      let project = req.params.project;
      
    });
    
};
