//PUBLIC COMMAND

//The setlist command outputs HowlingFreeze's guitar hero setlist
//Usage: !Fsetlist or !F setlist

exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `You can find Freeze's Clone Hero setlist here: https://docs.google.com/spreadsheets/d/1hIC5tmz64GhnhhLqOLY3yQe5Hnldj94XjfvzLDYYSRs/edit?usp=sharing`);
}