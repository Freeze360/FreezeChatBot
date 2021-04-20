//PUBLIC COMMAND

//this command outputs a random number between 1 and 10 of how festive the user is for the holiday
//usage: !F spooky
//output: 

exports.run = (client, message, args, user, channel, self, input, channelName) => {
    var size = Math.floor((Math.random() * 10) + 1);
    if (size===1){
        client.say(channel, `${user.username} has a ${size} milimeter peter! LUL`);
    }
    else if (size<5){
        client.say(channel, `${user.username} has a lil ${size} incher! NotLikeThis`);
    }
    else if (size<8){
        client.say(channel, `${user.username} has a respectable ${size} inch schlong. SeemsGood`);
    }
    else {
        client.say(channel, `${user.username} has a whopping ${size} incher! PogChamp`);
    }
}
