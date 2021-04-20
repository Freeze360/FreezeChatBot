//PUBLIC COMMAND

//subcount command outputs how many members of the alpha pack there are (subscribers)
//usage: !subcount
//output: There are currently $subcount Alpha Pack Members. Ahooo!

var subCount = 2;
exports.run = (client, message, args, user, channel, self, input, channelName) => {
   client.say(channel, `There are currently ${subCount} Alpha Pack members. Ahooo!`);
}