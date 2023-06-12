const restful = require('node-restful')

const mongoose = restful.mongoose

var Schema = mongoose.Schema;

var GenreSchema = new Schema({

  name: { type: String, required: true }

  });

// Virtual for book's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

module.exports = restful.model('Genre', GenreSchema)