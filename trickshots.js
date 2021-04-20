exports.run = (client, message, args, user, channel, self, input, channelName, Howls, subCount, trickshots) => {
    client.say(channel, `@${channelName} has hit: ${trickshots} tonight poggers`);
    console.log(trickshots);
};