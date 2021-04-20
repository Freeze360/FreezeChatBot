//ADAPTIVE COMMAND

//commands is a command designed to output a list of all current commands using the prefix

exports.run = (client, message, args, user, channel, self, input, channelName, howls) => {
    if (client.isMod(`${channel}`,`${user.username}`) || user.username === channelName.toLowerCase())
    {
        client.say(channel, `Commands: accountage, boobs, booty, cas, chatstats, chel, code, controller, dadJoke, discord, dpi, epic, focus, followage, game, gta, ig, j, keyboard, last, lurk, merch, mic, music, PCgames, peen, ping, plu, poll, raze, res, rules, schedule, sens, server, setgame, settitle, so, specs, stats, sub, subcount, twitter, tip, title, uptime, video, watchtime, winner, XBOXgames, and yt`);
    }
    else{
        client.say(channel, `Commands: accountage, boobs, booty, cas, chatstats, chel, code, controller, dadJoke, discord, dpi, epic, followage, game, gta, ig, j, keyboard, mic, music, last, lurk, merch, PCgames, peen, ping, plu, raze, res, rules, schedule, sens, server, specs, stats, sub, subcount, tip, title, twitter, uptime, video, watchtime, XBOXgames, and yt`);
    }
}