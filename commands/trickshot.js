exports.run = (client, message, args, user, channel, self, input, channelName) => {
    var trickshotFile = require(`C:\\Desktop\\Coding\\Javascript\\Twitch\\twitchChatBot\\index.js`);
    //Next if statement checks if the user is a mod or if they are owner of the channel
    if (client.isMod(`${channel}`,`${user.username}`) || user.username === channelName.toLowerCase())
    {
       module.exports.trickshots++;
    }
    else{
        client.say(channel, `Sorry, @${user.username}, you do not have access to this command.`);
    }
}