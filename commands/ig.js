//PUBLIC COMMAND

//ig command outputs a link to my instagram
//usage: !Fig or !F ig
//output: Follow @HowlingFreeze on instagram for more content! $instaLink

const instaLink = 'https://instagram.com/HowlingFreeze';
exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `Follow @${channelName} on instagram for more content! ${instaLink}`);
}