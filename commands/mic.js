//PUBLIC COMMAND

//The mic command outputs HowlingFreeze's current Gaming and streaming mic
//Usage: !Fmic or !F mic
//Output: @HowlingFreeze's Game mic: Logitech G Pro X Wireless Headset. @HowlingFreeze's Streaming mic: Blue Yeti Stereo Microphone on broadcaster mode.

exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `@${channelName} currently uses the Logitech G Pro X Wireless Gaming Headset. @${channelName}'s stream mic is the Blue Yeti Stereo Microphone set to broadcaster mode.`);
}