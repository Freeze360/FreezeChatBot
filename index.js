const tmi = require('tmi.js');
var channelName = 'HowlingFreeze';
var prefix = '!';
var trickshots = 0;
const config = {
    options: {
        debug: true,
    },

    connection: {
        cluster: 'aws',
        reconnect: true,
    },

    identity: {
        username: 'bot_freeze',
        password: 'oauth:hwkzjggez9pzo8lbuvwr3xg8wh0ntg',
    },

    channels: [channelName],
};

const client = new tmi.client(config);
client.connect();

client.on('connected', (address, port) => {
    client.action(channelName, 'The bot has connected on' + address + ':' + port);
});

//sub and resub messages

client.on("subscription",function(channel, username, method, message, userstate){
    client.say(channelName, `Thank you so much for subscribing @${username}! Welcome to... THE ALPHA PACK! Ahooo!`);
});

client.on("resub",function(channel, username, months, message, userstate, methods){
    client.say(channelName, `ALPHA PACK MEMBER @${username} just resubscribed for ${months} months! Ahooo!`);
});

//chat commands/messages
client.on('chat', (channel, user, message, self, Howls, subCount) => {
    if  (self) return;
    else{
        try {
            let pointsFile = require('./points/points.js');
            pointsFile.run(message, user.username, Howls);
    }   catch (err) {
            //client.say(channelName, `${err}`);
            //client.say(channelName, 'Error, command doesn\'t exist.');
    }
}
    if (message === 'hi') {
        client.say(channelName, `Hello @${user.username}!`);
        //console.log(user.username);
    }
    else if (message.toLowerCase() === 'can i play' || message.toLowerCase() == 'can i play?' || message.toLowerCase() == 'can i join' || message.toLowerCase() == 'can i join?'){
        client.say(channelName, 'Please do not ask to play. If Freeze is looking for teammates, he will invite some.');
        //console.log(user);
    }
    else if (message.toLowerCase() === 'you suck' || message.toLowerCase() == 'u suck') {
        client.say(channelName, 'You Swallow');
    }
    else if (message.toLowerCase() === 'blues'|| message.toLowerCase()== 'hockey') {
        client.say(channelName, 'LGB!!!');
    }
    else if (message.toLowerCase() === 'gg') {
        client.say(channelName, 'GG');
    }
    else if (message.toLowerCase() === 'ggs') {
        client.say(channelName, 'GG GG GG GG GG GG GG GG GG GG');
    }
    else if (message.toLowerCase() === 'ye') {
        client.say(channelName, 'ye');
    }
    else if (message.toLowerCase() === 'vibe check') {
        client.say(channelName, 'Positive Vibes Only :)');
    }
    else if (message.toLowerCase() === 'fort') {
        client.say(channelName, 'nut');
    }
    else if (message.toLowerCase() === 'rip') {
        client.say(channelName, 'howlin13Rip');
    }
    else if (message.toLowerCase() === 'hype' || message.toLowerCase() === 'hype!') {
        client.say(channelName, 'howlin13Hype howlin13Hype howlin13Hype');
    }
    else if (message.toLowerCase() === 'cracked' || message.toLowerCase() === 'youre cracked' 
    || message.toLowerCase() === 'you\'re cracked' || message.toLowerCase() === 'you\'re cracked!'
    || message.toLowerCase() === 'youre cracked!') {
        client.say(channelName, 'Freeze is howlin13Cracked ');
    }



    //cmd handler code
    /* !F help yes yes */
    if (message.substring(0,1).toLowerCase() == "!" )
    {
        const args = message.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        const input = message.slice(prefix.length+cmd.length+1).trim().split();
        //!help = help

        try {
            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(client, message, args, user, channel, self, input, channelName, Howls, subCount, trickshots);
        } catch (err) {
            console.log(err);
            //client.say(channelName, `${err}`);

            //client.say(channelName, 'Error, command doesn\'t exist.');
            return;
        }
    }
});