const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Barra de progresso da musica atual'),
    execute: async ({ client, interaction }) => {
        const queue =  client.player.getQueue(interaction.guildId);

        if (!queue) return await interaction.reply("Nenhum som tocando ;-;");

        let bar = queue.createProgressBar({
            queue: false,
            length:20,
            
        })

        song = queue.current;
        embed = new Discord.EmbedBuilder();

    await interaction.reply({
        embeds:[
            embed
            .setThumbnail(song.thumbnail)
            .setDescription(`**[${song.title}** está tocando agora]\n\n` + bar)
        ]
    })
    }
}