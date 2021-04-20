//PUBLIC COMMAND

//The mic command outputs HowlingFreeze's current keyboard
//Usage: !Fkeyboard or !F keyboard
//Output: @HowlingFreeze currently uses the SteelSeries Apex Pro TKL Wired Gaming Keyboard with Optical Switches

exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `@${channelName} currently uses the SteelSeries Apex Pro TKL Wired Gaming Keyboard with Optical Switches`);
}