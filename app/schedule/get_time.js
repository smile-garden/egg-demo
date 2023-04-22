const { Subscription } = require('egg');

class GetTime extends Subscription {
  static get schedule() {
    return {
      // interval: '3s',
      cron: '*/3 * * * * *',
      /* second (0 - 59, optional)
      minute (0 - 59)
      hour (0 - 23)
      day of month (1 - 31)
      month (1 - 12)
      week (0 - 7) (0 or 7 is Sun) */
      type: 'worker',
    };
  }

  async subscribe() {
    console.log(Date.now());
  }
}

module.exports = GetTime;
