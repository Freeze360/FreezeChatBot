//PUBLIC COMMAND

//ping command displays the user's ping
//usage: !F ping
//output: @HowlingFreeze, your ping is 82

exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.ping().then(function(data) {
        let ping = Math.floor(Math.round(data*1000))
        client.say(channel, `@${user.username}, your ping is ${ping}`)
    })
}