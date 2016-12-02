var mongoose = require('mongoose');
var Song = mongoose.model('Song');
var Employee = mongoose.model('Employee');

/* Song api start  */
exports.findAll = function(req, res) {
  Song.find({}, function(err, songs) {
    if (err) {
      throw new Error(err);
    }
  	res.send(songs);
  });
};

exports.findOne = function(req, res) {
  Song.findById(req.params.id, function(err, song) {
    if (err) {
      throw new Error(err);
    }
    res.send(song);
  });
};

exports.add = function(req, res) {
  var document = new Song(req.body);
  document.save(function(err, song) {
    if (err) {
      throw new Error(err);
    }
    res.send(song);
  });
};

exports.update = function(req, res) {
  Song.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function(err, song) {
    if (err) {
      throw new Error(err);
    }
    res.send(song);
  });
};

exports.remove = function(req, res) {
  Song.findByIdAndRemove(req.params.id, function(err, song) {
    if (err) {
      throw new Error(err);
    }
    res.send(song);
  });
};
/* Song api end  */


/* Employee api start  */
exports.findAllEmployee = function(req, res) {
  Employee.find({}, function(err, employees) {
    if (err) {
      throw new Error(err);
    }
  	res.send(employees);
  });
};

exports.findOneEmployee = function(req, res) {
  Employee.findById(req.params.id, function(err, employee) {
    if (err) {
      throw new Error(err);
    }
    res.send(employee);
  });
};

exports.addEmployee = function(req, res) {
  var document = new Employee(req.body);
  document.save(function(err, employee) {
    if (err) {
      throw new Error(err);
    }
    res.send(employee);
  });
};

exports.updateEmployee = function(req, res) {
  Employee.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function(err, employee) {
    if (err) {
      throw new Error(err);
    }
    res.send(employee);
  });
};

exports.removeEmployee = function(req, res) {
  Employee.findByIdAndRemove(req.params.id, function(err, employee) {
    if (err) {
      throw new Error(err);
    }
    res.send(employee);
  });
};
/* Employee api end  */