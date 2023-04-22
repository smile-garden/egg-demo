const moment = require('moment');

module.exports = {
  currentTime() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
  },
  get timeProp() {
    return this.currentTime();
  },
};
