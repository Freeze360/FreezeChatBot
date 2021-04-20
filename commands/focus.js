//MOD ONLY COMMAND

//focus command lets chat know that Freeze is currently focussed on the game and will read chat as soon as possible
//usage: !Ffocus or !F focus
//output: Freeze is currently focussed on the game and will read chat as soon as possible. Thank you for your patience :)
//outputCase2: Sorry, @randomUser123, you do not have access to this command.

exports.run = (client, message, args, user, channel, self, input, channelName) => {
    //Next if statement checks if the user is a mod or if they are owner of the channel
    if (client.isMod(`${channel}`,`${user.username}`) || user.username === channelName.toLowerCase())
    {
        client.say(channel, 'Freeze is currently focussed on the game and will read chat as soon as possible. Thank you for your patience :)');
    }
    else{
        client.say(channel, `Sorry, @${user.username}, you do not have access to this command.`);
    }
}