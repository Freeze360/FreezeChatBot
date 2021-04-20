//PUBLIC COMMAND

//discord command outputs a link to my discord
//usage: !Fdiscord or !F discord
//output: Come join the community! $discordLink

const discordLink = 'https://discord.gg/cubxPUa';
exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `Come join the community! ${discordLink}`);
}