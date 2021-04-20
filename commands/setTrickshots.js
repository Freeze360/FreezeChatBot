exports.run = (client, message, args, user, channel, self, input, channelName) => {
    var regex = /^[0-9]+$/;
    var trickshotFile = require(`C:\\Desktop\\Coding\\Javascript\\Twitch\\twitchChatBot\\index.js`);
    //Next if statement checks if the user is a mod or if they are owner of the channel
    if (client.isMod(`${channel}`,`${user.username}`) || user.username === channelName.toLowerCase())
    {
       module.exports.trickshots = input;
    }
    else{
        client.say(channel, `Sorry, @${user.username}, please enter a valid number after the command.`);
    }
}