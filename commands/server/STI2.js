const discord = require("discord.js");
module.exports = {
    name: 'STI2',
    category: 'server',
    description: 'STI2',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("What are the requirements to become a member?")
            .setDescription(`    
             > - Read our rules in 📌welcome-and-rules
             > - You are a motivated and dedicated player.
             > - You are a non-toxic person.
             > - You play in the region: EUW or NA
             > - Everyone of every elo can apply to join a team.`)
            .setColor("#ba90f1")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
