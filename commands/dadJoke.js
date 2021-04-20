exports.run = (client, message, args, user, channel, self, input, channelName) => {
    var joke = Math.floor((Math.random() * 11) + 1);
    if (joke === 1) {
        client.say(channel, `What’s 10 inches long, 2 inches thick, and starts with a P?`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `A really good shit!`);
    }
    else if (joke === 2) {
        client.say(channel, `Did you hear about the mathematician who’s afraid of negative numbers?`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `He'll stop at nothing to avoid them!`);
    }
    else if (joke === 3) {
        client.say(channel, `Why don't scientists trust atoms?`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `Because they make up everything!`);
    }
    else if (joke === 4) {
        client.say(channel, `What's the difference between a cat and a comma?`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `A cat has claws at the end of paws, while a comma has a pause at the end of a clause.`);
    }
    else if (joke === 5) {
        client.say(channel, `What do you call a fake noodle?`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `An impasta!`);
    }
    else if (joke === 6) {
        client.say(channel, `What did one hat say to the other?`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `You wait here, I'll go on a head!`);
    }
    else if (joke === 7) {
        client.say(channel, `What do you call an apology written in dots and dashes?`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `Re-morse code!`);
    }
    else if (joke === 8) {
        client.say(channel, `Why did the hipster burn his mouth?`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `He drank his coffee before it was cool!`);
    }
    else if (joke === 9) {
        client.say(channel, `Did you hear about the two people that stole a calender?`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `They each got 6 months!`);
    }
    else if (joke === 10) {
        client.say(channel, `Why did the oreo go to the dentist?`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `Because he lost his filling!`);
    }
    else if (joke === 11) {
        client.say(channel, `How many Seconds are there in a year?`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `...`);
        client.say(channel, `12!`);
    }
}
