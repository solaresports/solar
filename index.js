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

    client.user.setActivity('Applications', { type: 'WATCHING' });

});

bot.on("message", async message => {
    if (message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = message.Array[0];
    let args = message.content.substring(mesage.conntent.index0f(' ') + 1);

    if (!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if (comandfile) commandfile.run(bot, message, args)

    if (cmd === `${prefix}reactions`) {
        let embed = new Discord.MesageEmbed()
        .setTitle(`Reaction Roles`)
        .setDescription('React to verif')
        .setColor('GREEN')
        let msgEmbed = await message.channel.send(embed)
        msgEmbed.react('✔️')
    }
})

//This is hidden when im streaming, Solar Protection.
client.login(process.env.token);
