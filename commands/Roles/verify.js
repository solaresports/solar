const { Client } = require('discord.js');
module.exports = {
    name: 'statusrainbow',
    category: 'status',
    description: 'statusrainbow',
    run: async (bot, message, args, guild) => {

client.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.id === '')
        await message.delete();
    if (message.content.toLowerCase() === '/verify' && message.channel.id === '') {
        await message.delete().catch(err => console.log(err));
        const role = message.guild.roles.cache.get('');
        if (role) {
            try {
                await message.member.roles.add(role);
                console.log("Role added!");
            }
            catch (err) {
                console.log(err);
    }
});
