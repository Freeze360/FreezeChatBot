//PUBLIC COMMAND

//The donate command outputs the link to my tippage
//Usage: !donate

exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `You can donate to @${channelName} by following this link: https://streamelements.com/howlingfreeze/tip`);
}