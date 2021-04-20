//PUBLIC COMMAND

//The res command outputs HowlingFreeze's current screen resolution
//Usage: !music
//Output: Current DMCA Free Music/beat Playlist Can Be Found Here: 

const musicLink = "https://www.youtube.com/watch?v=udGvUx70Q3U";
exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `Current DMCA Free Music/Beat Playlist Can Be Found Here: ${musicLink}`);
}