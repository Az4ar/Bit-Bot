const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

<<<<<<< HEAD

const Info = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Barra de progresso da musica atual'),
    execute: async ({ client, interaction }) => {
        const queue = client.player.getQueue(interaction.guildId);
=======
module.exports = {
    data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Barra de progresso da musica atual'),
    execute: async ({ client, interaction }) => {
        const queue =  client.player.getQueue(interaction.guildId);
>>>>>>> 575e3ef64a76ffa22f3081d439473c2eeb0ff4aa

        if (!queue) return await interaction.reply("Nenhum som tocando ;-;");

        let bar = queue.createProgressBar({
            queue: false,
<<<<<<< HEAD
            length: 20,

=======
            length:20,
            
>>>>>>> 575e3ef64a76ffa22f3081d439473c2eeb0ff4aa
        })

        song = queue.current;
        embed = new Discord.EmbedBuilder();

<<<<<<< HEAD
        await interaction.reply({
            embeds: [
                embed
                    .setThumbnail(song.thumbnail)
                    .setDescription(`**[${song.title}** está tocando agora]\n\n` + bar)
            ]
        })
    }
}

module.exports = Info;
=======
    await interaction.reply({
        embeds:[
            embed
            .setThumbnail(song.thumbnail)
            .setDescription(`**[${song.title}** está tocando agora]\n\n` + bar)
        ]
    })
    }
}
>>>>>>> 575e3ef64a76ffa22f3081d439473c2eeb0ff4aa
