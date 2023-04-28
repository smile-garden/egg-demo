// demo 数据库
module.exports = app => {
  const { mongoose: { Schema }, mongooseDB } = app;
  const demo = mongooseDB.get('demo');

  const oneSchema = new Schema(
    {},
    {
      collection: 'one',
      versionKey: false,
    }
  );

  return demo.model('One', oneSchema);
};
