//PUBLIC COMMAND

//The server command outputs how many Howls the user has acquired
//Usage: !Fhowls or !F howls
//Output:  @user has $howls Howls, Ahooo!

exports.run = (client, message, args, user, channel, self, input, channelName, Howls) => {
    let userHowls = Howls;
    var chatterIndex = userHowls.findIndex(userHowls.username == user.username);
    //log chatter to console
    console.log("Before update: ", userHowls[chatterIndex].howls)
    //update howls
    if (userHowls[chatterIndex].username == user.username){
        //add 1 to the current user's howl total
        userHowls[chatterIndex].howls += 1;
        client.say(channel, `@${user.username}, you have ${userHowls[chatterIndex].howls} howls, Ahooo!`);
    }
    /*userHowls.forEach(function(chatter){
        if (userHowls[chatter].username == user.username){
            userHowls[chatter].howls += 1;
            client.say(channel, `@${user.username}, you have ${userHowls[chatter].howls} howls, Ahooo!`);
        }
    });*/
    module.exports.Howls = userHowls;
}