//PUBLIC COMMAND

//XBOXgames command displays all games Freeze Currently has installed on XBOX
//usage: !XBOXgames
//output: XBOX Games: ...

const dpi = 950;
exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `XBOX Games: Call of Duty (WaW->Infinite Warfare), Crisis 2, Fallout 4, FIFA 15+17, 
    Fusion Frenzy, Gears of War 4, Goat Simulator, GTA IV+V, Guitar Hero Live, Halo (1-4+Reach), 
    NHL (17-20), Red Dead Redemption 2, Rocket League, Ryse Son of Rome, Star Wars Battlefront II `);
}