//PUBLIC COMMAND

//The controller command outputs HowlingFreeze's current controller
//Usage: !Controller or !controller
//Output: @HowlingFreeze currently uses the Xbox Series 1 Elite Controller with 2 paddles

exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `@${channelName} currently uses the Xbox Series 1 Elite Controller with 2 paddles.`);
}