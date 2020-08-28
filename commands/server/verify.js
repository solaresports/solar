const discord = require("discord.js");
module.exports = {
    name: 'verify',
    category: 'server',
    description: 'exports',
    run: async (bot, message, args, guild) => {

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
    }
}
