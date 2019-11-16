require('dotenv').config();
const {RTMClient } = require('@slack/rtm-api');
var token = 'xoxb-519865642322-828717325828-CATdMw55Y5aAeKs2rpUqDyK2';

var rtm = new RTMClient(token);
rtm.start();

rtm.on('message', function (message) {
	var channel = message.channel;
	var text = message.text;

	switch(text) {
		case '영화 ' :
			rtm.sendMessage(' 취향에 맞는 영화를 추천해들릴게요', channel);
			break;
		case '밥':
			rtm.sendMessage('주변 맛집 추천해 드릴께요 . ', channel);
			break;

		case '놀이' :
			rtm.sendMessage('고만해', channel);
			break;
		default:
			rtm.sendMessage('안녕해사에ㅛ .영화 놀이 밥 중에 말씀하세요', channel);
	}	

});

