'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/smile', async () => {
  it('one smile page', async () => {
    await app.httpRequest()
      .get('/smile')
      .expect(200)
      .expect('one smile');
  });
});
