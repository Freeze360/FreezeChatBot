//PUBLIC COMMAND

//yt command outputs a link to my youtube
//usage: !Fyt or !F yt
//output: Subscribe to @HowlingFreeze on YouTube for more content! $ytLink

const ytLink = 'https://www.youtube.com/channel/UCJV9Ovk0cUxraI7DjGfPFKQ';
exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `Subscribe to @${channelName} on YouTube for more content! ${ytLink}`);
}