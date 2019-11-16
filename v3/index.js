require('dotenv').config();
const { RTMClient } = require('@slack/rtm-api');

const token = 'xoxb-519865642322-828717325828-CATdMw55Y5aAeKs2rpUqDyK2';

const rtm = new RTMClient(token);
rtm.start();

const food = require('./food');
const movie = require('./movie');

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  switch (text) {
  case '영화':
    movie(rtm, channel);
    break;
  case '밥':
    food(rtm, channel);
    break;


  case '놀이':
    rtm.sendMessage('고만해', channel);
    break;
  default:
    rtm.sendMessage('안녕해사에ㅛ .영화 놀이 밥 중에 말씀하세요', channel);
  }
});
