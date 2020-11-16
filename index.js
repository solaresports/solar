const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
                                                                         

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");

["command", "event"].forEach(handler=> {

  require(`./handlers/${handler}`)(client);


});

client.on("ready", async () => {

    console.log(`${client.user.username} is online!`)

    client.user.setActivity('Community Manager', { type: 'STREAMING' });

});

bot.on("messageReactuibAdd", (reaction, user) => {
    if (user.bot) return;
    var roleName = reaction.emoji.name;
    var role = reaction.message.guild.roles.find(role => role.name.toLocaleLowerCase() === roleName.toLocaleLowerCase())
    var member = reaction.message.guild.members.find(member => member.id === user.id)

    member.addRole(role.id)
    member.createDM().then(channel => {
        channel.send(`**De rol ${role.id} Dit is cool he`)
    });
})

//Token is niet zichtbaar in de code documenten
client.login(process.env.token);
