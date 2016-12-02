var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Employee = new Schema({
	first_name: String,
        middle_name: String,
        last_name: String,
        employee_code: Number,
        address: String,
        extension: String,
        phone_number: String,
        email_address: String,
	status: String,
	lead_id: String,
	manager_id: String,
	role_id: String,
}, {
  versionKey: false,
  
  toJSON: {
    virtuals: true,
    transform: function(doc, ret, options) {
      ret.id = ret._id.toHexString();
      delete ret._id;
    }
  },
  
  toObject: {
    virtuals: true
  }
});

mongoose.model('Employee', Employee);
