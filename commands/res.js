//PUBLIC COMMAND

//The res command outputs HowlingFreeze's current screen resolution
//Usage: !Fres or !F res
//Output: @HowlingFreeze plays on native resolution (1920x1080)

const res = '1920x1080'
exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `${res}`);
}