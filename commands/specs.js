//PUBLIC COMMAND

//specs command outputs a link to the PC part picker page with all of HowlingFreeze's PC specs
//usage: !Fspecs
//output: You can find $channelName's PC specs at $partPickerList.

const partPickerList = 'https://pcpartpicker.com/user/MrFreeze360/saved/#view=4LBhkL';
exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, /*`You can find ${channelName}'s PC specs at ${partPickerList}`*/ 
    `Freeze's Gaming PC: Custom Watercooled i9-10850k, RTX 3070 Vision OC, 64GB Corsair Vengence RGB RAM @3200MHz, 850W Corsair RMx Series Gold PSU, 1TB Samsung Evo+ SSD.`);
    client.say(channel, `Freeze's Stream PC: AIO Cooled i7-8700k with integrated graphics, 16GB G-Skill TridentZ RGB RAM @3200MHz, 650W EVGA Bronze PSU, 1TB Seagate HDD, 250GB Mushkin Pilot SSD.`);
}