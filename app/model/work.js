// 单个数据库
/* module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;

  const workSchema = new Schema(
    {
      name: { type: String },
      job: { type: String },
    },
    {
      collection: 'work',
      versionKey: false,
    }
  );

  return mongoose.model('Work', workSchema);
};
 */

// company 数据库
module.exports = app => {
  const { mongoose: { Schema }, mongooseDB } = app;
  const company = mongooseDB.get('company');

  const workSchema = new Schema(
    {
      name: { type: String },
      job: { type: String },
    },
    {
      collection: 'work',
      versionKey: false,
    }
  );

  return company.model('Work', workSchema);
};
