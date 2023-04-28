// company 数据库
module.exports = app => {
  const { mongoose: { Schema }, mongooseDB } = app;
  const company = mongooseDB.get('company');

  const userSchema = new Schema(
    {
      id: { type: String },
      userName: { type: String },
      password: { type: String },
    }
  );

  return company.model('User', userSchema);
};
