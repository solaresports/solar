const discord = require("discord.js");
module.exports = {
    name: 'SRI4',
    category: 'server',
    description: 'SRI4',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Ons Team")
            .setDescription(`    
             **Steamer**
             - [TDA] Remco D
             
             **Head Moderator**
             - Daphne
             
             **Moderator**
             - Aklaz
             - Kerrie
             - Lootjuh_NL
             - Neitna
             - [TDA]Krikke
             - Apply
             - MCmiauw`)
            .setColor("#ba90f1")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
