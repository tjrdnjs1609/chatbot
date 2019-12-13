const movie = function (rtm, channel) {
  console.log('jenkins!! 영화를 추천합니다.');
  rtm.sendMessage('jenkins!취향에 맞는 영화를 추천해드릴께요', channel);

//	rtm.sendMessage('좋아하는 영화 하나좀 알려주실래요?',channel);
};
module.exports = movie;
