const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Form = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   check: {
      type: Boolean | String
   },
   recruiter: {
      type: Boolean | String
   },
   progress: {
       type: Boolean | String
   },
   subject: {
       type: String
   }
}, {
   collection: 'forms'
})

module.exports = mongoose.model('Forms', Form)
