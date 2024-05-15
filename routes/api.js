'use strict';

const IssueModel = require('../models').Issue;
const ProjectModel = require('../models').Project;

module.exports = function (app) {

  app.route('/api/issues/:project')
  
    .get((req, res) => {
      let project = req.params.project;
      
    })
    
    .post(async (req, res) => {
      let projectName = req.params.project;

      const { issue_title, issue_text, created_by, assigned_to, status_text } = req.body;

      if (!issue_title || !issue_text || !created_by) {
        res.json({ error: "required field(s) missing" });
        return;
      }

      try {
        let projectModel = await ProjectModel.findOne({ name: projectName });
        if (!projectModel) {
          projectModel = new ProjectModel({ name: projectName });
          projectModel = await projectModel.save();
        }
        const issueModel = new IssueModel({
          projectId: projectModel._id,
          issue_title: issue_title || "",
          issue_text: issue_text || "",
          created_on: new Date(),
          updated_on: new Date(),
          created_by: created_by || "",
          assigned_to: assigned_to || "",
          status_text: status_text || "",
        })
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
      }
      
    })
    
    .put((req, res) => {
      let project = req.params.project;
      
    })
    
    .delete((req, res) => {
      let project = req.params.project;
      
    });
    
};
