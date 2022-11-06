const { SlashCommandBuilder } = require('discord.js');
const wait = require("node:timers/promises").setTimeout;
module.exports = {
    data: new SlashCommandBuilder()
        .setName("동전게임")
        .setDescription('🪙 앞일까? 뒤일까? 운에 맡겨봐'),
    async execute(interaction) {
        console.log(interaction)
        const randomNumber = Math.floor(Math.random() * 2)
        let result;
        if(randomNumber){
            result = "앞면"
        }else{
            result = "뒷면"
        }
        await interaction.reply(`앞면일까 뒷면일까 ? 결과는 두근 두근 👉 ︎👈 `);
        await wait(4000);
        await interaction.followUp(`🪙 은 ${result}입니당 >_0`);
    },
};