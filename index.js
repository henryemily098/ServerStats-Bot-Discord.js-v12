const Discord = require('discord.js');
const client = new Discord.Client();

client.login('ODM2ODE0MTgyMDYxMzA5OTcz.YIjd8A.IWK561R3WDA7-1IVFuOsbbkLMm4');

client.on('ready', () =>{ 
    console.log(`${client.user.tag} its ready`);
    ServerStats();
    setInterval(ServerStats, 10*1000);
});

// This is where the stats works

let stats = {
    Guild_ID: "772740285221699624",
    Total_Members: "836812056710742026",
    Members: "836812091082932304",
    Bots: "836812136054259785",
};

async function ServerStats() {
    var Guild = client.guilds.cache.get(stats.Guild_ID);
    await Guild.channels.cache.get(stats.Total_Members).setName('Total Members: ' + Guild.memberCount);
    await Guild.channels.cache.get(stats.Members).setName('Members: ' +  Guild.members.cache.filter(m => !m.user.bot).size);
    await Guild.channels.cache.get(stats.Bots).setName('Bots: ' + Guild.members.cache.filter(m => m.user.bot).size);
}