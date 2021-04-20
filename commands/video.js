const vid = 'https://www.youtube.com/watch?v=t11yBHfVacM';
exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `You can find ${channelName}'s latest video at ${vid}`);
}