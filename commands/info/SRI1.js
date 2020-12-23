const discord = require("discord.js");
module.exports = {
    name: 'INFO1',
    category: 'server',
    description: 'INFO1',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Discord Regels")
            .setDescription(`    
            > **1:** Gedraag je in de chat, ben aardig tegen elkaar en laat iedereen in zijn of haar waarden.
            > **2:** Geen discriminatie, Racisme, of andere onnodige uitingen.
            > **3:** Staff is hier om alles rustig te houden, luister dan ook naar hun.
            > **4:** Maak geen reclame in deze discord. Dit is niet toegestaan.
            > **5:** Praten over ingame dingen van TDA is niet toegestaan. houd dit stream related, Geen meta.
            > **6:** Vraag niet om een rang, en of andere goederen.
            > **7:** Verkoop geen goederen in onze discord.`)
            .setColor("#8a3df0")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
