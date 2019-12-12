require('dotenv').config();

const token = process.env.SLACK_TOKEN;
const tchannel = process.env.TESTING_CHANNEL;
const { RTMClient, LogLevel } = require('@slack/rtm-api');

const rtm = new RTMClient(token, {
  // logLevel : LogLevel.Debug,
});

(async () => {
  await rtm.start()
    .catch(console.error);
})();

const assert = require('assert');
const food = require('./food');
const movie = require('./movie');

let res;
describe('유닛 테스트를 시작합니다.', async () => {
  before(async () => res = await food(rtm, tchannel));

  it('밥 메시지 테스트', (done) => {
    assert.equal(res, 'success');
    done();
  });
});
