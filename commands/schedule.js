//PUBLIC COMMAND

//schedule command outputs my current schedule
//usage: !Fschedule or !F schedule
//output: @HowlingFreeze streams MWF from 7-10pm CST. Turn on notifications to know exactly when Freeze goes live!

const schedule = '@HowlingFreeze streams MWF from 7-11pm CST. Turn on notifications to know exactly when Freeze goes live!';
exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `${schedule}`);
}