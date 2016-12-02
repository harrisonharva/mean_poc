var express = require('express');
var rest = require('../server/controllers/rest');

module.exports = function(app){

//  /* songs routes start */
//  // find all songs route
//  app.get('/songs', rest.findAll);
//  
//  // find one song route
//  app.get('/songs/:id', rest.findOne);
//  
//  // Add song route
//  app.post('/songs', rest.add);
//  
//  // Update song route
//  app.put('/songs/:id', rest.update);
//  
//  // Delete song route
//  app.del('/songs/:id', rest.remove);
//  /* songs routes end */
//
//
//  /* employees routes start */
//  // find all songs route
//  app.get('/employees', rest.findAllEmployee);
//  
//  // find one song route
//  app.get('/employees/:id', rest.findOneEmployee);
//  
//  // Add song route
//  app.post('/employees', rest.addEmployee);
//  
//  // Update song route
//  app.put('/employees/:id', rest.updateEmployee);
//  
//  // Delete song route
//  app.del('/employees/:id', rest.removeEmployee);
//  /* employees routes end */



  /* songs routes start */
  var songs = express.Router();
  
  // find all songs route
  //app.get('/songs', rest.findAll);
  songs.get('/songs', rest.findAll);
  
  // find one song route
  //app.get('/songs/:id', rest.findOne);
  songs.get('/songs/:id', rest.findOne);
  
  // Add song route
  //app.post('/songs', rest.add);
  songs.post('/songs', rest.add);
  
  // Update song route
  //app.put('/songs/:id', rest.update);
  songs.put('/songs/:id', rest.update);
  
  // Delete song route
  //app.del('/songs/:id', rest.remove);
  songs.delete('/songs/:id', rest.remove);
  /* songs routes end */


  /* employees routes start */
  var employees = express.Router();
  // find all employees route
  //app.get('/employees', rest.findAllEmployee);
  employees.get('/employees', rest.findAllEmployee);
  
  // find one employee route
  //app.get('/employees/:id', rest.findOneEmployee);
  employees.get('/employees/:id', rest.findOneEmployee);
  
  // Add song route
  //app.post('/employees', rest.addEmployee);
  employees.post('/employees', rest.addEmployee);
  
  // Update song route
  //app.put('/employees/:id', rest.updateEmployee);
  employees.put('/employees/:id', rest.updateEmployee);
  
  // Delete song route
  //app.del('/employees/:id', rest.removeEmployee);
  employees.delete('/employees/:id', rest.removeEmployee);
  /* employees routes end */
};