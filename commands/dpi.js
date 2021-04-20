//PUBLIC COMMAND

//dpi command is designed to output my dpi
//usage: !Fdpi or !F dpi
//output: @HowlingFreeze's current dpi: $dpi

const dpi = 800;
exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `@${channelName}'s current dpi: ${dpi}`);
}