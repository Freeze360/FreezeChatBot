//PUBLIC COMMAND

//The merch command outputs HowlingFreeze's current Merch Live on the Streamlabs website
//Usage: !merch

exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `You can find @${channelName}'s Merch at https://streamlabs.com/howlingfreeze/merch`);
}