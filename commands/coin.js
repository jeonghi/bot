const { SlashCommandBuilder } = require('discord.js');
const wait = require("node:timers/promises").setTimeout;
module.exports = {
    data: new SlashCommandBuilder()
        .setName("๋์ ๊ฒ์")
        .setDescription('๐ช ์์ผ๊น? ๋ค์ผ๊น? ์ด์ ๋งก๊ฒจ๋ด'),
    async execute(interaction) {
        console.log(interaction)
        const randomNumber = Math.floor(Math.random() * 2)
        let result;
        if(randomNumber){
            result = "์๋ฉด"
        }else{
            result = "๋ท๋ฉด"
        }
        await interaction.reply(`์๋ฉด์ผ๊น ๋ท๋ฉด์ผ๊น ? ๊ฒฐ๊ณผ๋ ๋๊ทผ ๋๊ทผ ๐ ๏ธ๐ `);
        await wait(4000);
        await interaction.followUp(`๐ช ์ ${result}์๋๋น >_0`);
    },
};