import * as mongoose from 'mongoose';

var sitesModel: mongoose.Model<mongoose.Document> = mongoose.model(
  'sites',
  new mongoose.Schema({
      id: {
        type: Number
      },
      name: {
        type: String
      },
      title: {
        type: String
      },
      type: {
        type: String
      }
    })
);

export { sitesModel };
