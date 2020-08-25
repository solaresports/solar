const discord = require("discord.js");
module.exports = {
    name: 'arkserver',
    category: 'server',
    description: 'arkserver',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Ark PVE Server")
            .setDescription(`    
            **Information**
            We have our own ark server.
            This is a small and friendly pve community.
            Tribe wars enabled in wanted.
            
            **Server Settings**
            > - XP: X5
            > - Gathering: X5
            > - Breeding: X10
            > - Taming: X10
            > - Hatching: X10
            
            **Server Maps**
            > - Valguero
            > - Exctinction
            > - Upcoming: The Center
            > - Upcoming: The Island
            > - Upcoming: Ragnarok
            > 
            **Server Mods**
            > - Classic Flyers
            > - Awesome SpyGlass!
            > - Auto Engrams!
            > - HG Stacking Mod 10000-90 V312
            > - Valguero Dino and Map Extension
            > - Water for ARK V2.2
            > - Better Reusables
            > - Dino Colourizer!
            > - Super Structures
            > - Solar Admin System
            
            **Server IP**
            > **Valguero:** 46.251.241.246:8778 | steam://connect/46.251.241.246:8778
            > **Extinction:** 46.251.243.133:13778 | steam://connect/46.251.243.133:13778`)
            .setColor("#ba90f1")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
