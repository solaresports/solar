const discord = require("discord.js");
module.exports = {
    name: 'INFO2',
    category: 'server',
    description: 'INFO2',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Vraag om hulp")
            .setDescription(`    
            Als je hulp nodig hebt, mag je een @moderator taggen in de chat. Deze zullen reageren op jou vraag en dit zo snel mogelijk behandelen. Keep in mind, dat iedereen dit vrijwillig doet. En dus ook niet altijd direct kan antwoorden. Graag vragen wij ook respect voor de moderators.!`)
            .setColor("#4EF0E8")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
