//PUBLIC COMMAND

//sub command links to my subscription page for users who do not have a sub button
//usage: !Fsub or !F sub
//output: Subs and bits directly support Freeze! You can become an Alpha Pack member by clicking the star or by following this link: https:///www.twitch.tv/products/howlingfreeze 

const subLink = 'https://www.twitch.tv/products/howlingfreeze';
exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `Subs and bits directly support Freeze! You can become an Alpha Pack member by clicking the star or by following this link: ${subLink}`);
}