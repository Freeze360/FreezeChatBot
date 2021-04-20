//PUBLIC COMMAND

//PCgames command displays all games Freeze Currently has installed
//usage: !PCgames
//output: PC Games: ...

const dpi = 950;
exports.run = (client, message, args, user, channel, self, input, channelName) => {
    client.say(channel, `PC Games: A Plague Tale Innocence, Age of Empires (1-3), Among Us, 
    Awesomenauts, Call of Duty Cold War + Warzone, Dead Cells, Dishonored 2, Doom Eternal, Fortnite, 
    Forza Horizon 4, Gears of War (all), GTA V, Halo MCC, Hyper Scape, HyperDot, Khimera Destroy All Monster Girls,
    King Arthur's Gold, Maelstrom, Path of Exile, Relic Hunters Zero, Rise of Nations, Rocket League, Rogue Company, 
    Sea of Thieves, Starlink - Battle for Atlas, Subnautica, The Outer Worlds, Tom Clancy's Rainbow Six Siege, Totally 
    Accurate Battle Simulator, Valorant.`);
}