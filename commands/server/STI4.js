const discord = require("discord.js");
module.exports = {
    name: 'STI4',
    category: 'server',
    description: 'STI4',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Information")
            .setDescription(`    
             > - Teams wont be random, we look in to everyone there skill level and mindset.
             > - You will be added in a private chat and voice channel with your team so u can chat and play in there without other people joining in randomly.
             > - After we placed u in a team, we will change your server nickname. For example: [13-02] the first number is for the team number your in. The second number is your personal player number 01 is for captain and so fort.`)
            .setColor("#ba90f1")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
