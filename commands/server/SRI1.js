const discord = require("discord.js");
module.exports = {
    name: 'INFO1',
    category: 'server',
    description: 'INFO1',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Server Rules")
            .setDescription(`    
            > **1:** All text channels are in English. Speak only this language in our chats.
            > **2:** No harassment of other players, this includes: Racism, Sexism, Xenophobia, Transphobia, Homophobia, ect.
            > **3:** No ads from other discord and from websites in our chats.
            > **4:** Keep our voice channels friendly. Don't be toxic and behave yourself.
            > **5:** Do not spam in our chats. This is tedious and difficult.
            > **6:** No NSFW content of conversations about illegal activities.
            > **7:** Staff has the final say. Listen and respect the employees who keep the server running.`)
            .setColor("#8a3df0")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
