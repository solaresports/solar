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
            Hier staat een lijstje met alle namen van mensen die helpen bij / aan de stream van TDA_Stevex. Dit zijn dus gewoon helden!    
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
