//PUBLIC COMMAND

//twitter command outputs a link to my twitter
//usage: !Ftwitter or !F twitter
//output: Come check out Freeze's twitter for stream updates and more! $twitterLink

const twitterLink = 'https://twitter.com/HowlingFreeze';
exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `Come check out Freeze's twitter for stream updates and more! ${twitterLink}`);
}