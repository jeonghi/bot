const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Replies with Same!'),
    async execute(interaction) {
        return interaction.reply();
    },
};