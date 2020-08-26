const discord = require("discord.js");
module.exports = {
    name: 'mcserver',
    category: 'server',
    description: 'mcserver',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Minecraft - Survival")
            .setDescription(`    
            **Information**
            We have our own minecraft server.
            This is a small and friendly survival community.
            PVP is disabled.
            
            **Server Settings**
            > - Difficulty: Normal
            > - Version: 1.16.2
            > - PVP: Disabled
            > - Griefprotection: Enabled
            > - Chestlock: Enabled
            
            **Server World**
            > - Size: Normal biomes
            > - Map Version: 1.16.2
            > 
            **Server Plugins**
            > - Essentials
            > - Luckyperms
            > - LWC Chestlock
            > - Coreprotection
            > - Solar Moderation
            > - Solar Events
            
            **Server IP**
            > **Survival IP:** solar.mclogin.nl`)
            .setColor("#ba90f1")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
