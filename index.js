const Discord = require('discord.js');
const client = new Discord.Client();

client.login('your-token');

client.on('ready', () =>{ 
    console.log(`${client.user.tag} its ready`);
    ServerStats();
    setInterval(ServerStats, 10*1000);
});

// This is where the stats works

let stats = {
    Guild_ID: "", // Guild ID
    Total_Members: "", // For Total Members Channel ID
    Members: "", // For Members Channel ID
    Bots: "", // For Bots Channel ID
};

async function ServerStats() {
    // Getting Guild
    var Guild = client.guilds.cache.get(stats.Guild_ID);
    // Getting how much users and bots
    var Users = Guild.members.cache.filter(m => !m.user.bot).size;
    var Bots = Guild.members.cache.filter(m => m.user.bot).size;
    // Getting Total channel for MemberCount
    await Guild.channels.cache.get(stats.Total_Members).setName('Total Members: ' + Guild.memberCount);
    // Getting Members channel for users count
    await Guild.channels.cache.get(stats.Members).setName('Members: ' + Users);
    // Getting Bots channel for bots count
    await Guild.channels.cache.get(stats.Bots).setName('Bots: ' + Bots);
}
