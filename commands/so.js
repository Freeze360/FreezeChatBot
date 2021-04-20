//MOD ONLY COMMAND

//Shout out command displays the person's twitch in the message
//usage: !Fso HowlingFreeze 
//output: Everyone, go check out twitch.tv/HowlingFreeze for some awesome content!
//outputCase2: Sorry, @randomUser123, you do not have access to this command.

exports.run = (client, message, args, user, channel, self, input, channelName) => {
    //Next if statement checks if the user is a mod or if they are owner of the channel
    if (client.isMod(`${channel}`,`${user.username}`) || user.username === channelName.toLowerCase())
    {
        client.say(channel, `Everyone, go check out twitch.tv/${input} for some awesome content!`);
    }
    else{
        client.say(channel, `Sorry, @${user.username}, you do not have access to this command.`);
    }
}