const moment = require('moment');
const bcrypt = require('bcrypt');

module.exports = {
  relativeTime(time) {
    return moment(new Date(time * 1000)).fromNow();
  },
  genSaltPassword(password) {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (!err) {
            resolve(hash);
          } else {
            reject(err);
          }
        });
      });
    });
  },
  /**
   * 验证密码
   * @param {string} password [输入密码]
   * @param {string} hash // 数据库保存密码
   * @return {boolean} // 是否匹配
   */
  comparePassword(password, hash) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hash, (err, res) => {
        if (!err) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    });
  },
};
