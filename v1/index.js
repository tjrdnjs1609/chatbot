const {RTMClient } = require('@slack/rtm-api');
var token = 'xoxb-519865642322-828717325828-CATdMw55Y5aAeKs2rpUqDyK2';

var rtm = new RTMClient(token);
rtm.start();

rtm.on('message', function (message) {
	var channel = message.channel;
	var text = message.text;

	if( text == '안녕') {
		rtm.sendMessage('헬로', channel);
	} else {
		rtm.sendMessage('응?', channel );
	}
});

