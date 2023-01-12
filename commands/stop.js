const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

const Stop = {
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription(`Interrompe a musica`),

    execute: async ({ client, interaction }) => {
        try {
            let embed = new Discord.EmbedBuilder();
            const queue = client.player.getQueue(interaction.guild.id);
            const isPlaying = queue;

            embed
                .setDescription("**[+] Nenhuma musica para parar**")
                .setFooter({ text: "Não há nenhuma musica tocando no momento!" })
                .setColor("Red");
            if (isPlaying == undefined) return interaction.reply({embeds: [embed]})

            if (!interaction.member.voice.channel) return interaction.reply("Entre em um canal de voz para começar a festa🎈🎈🎈");

            await queue.stop();

            embed
                .setDescription("**A Festa acabou galerinha ;-;**")
                .setFooter({ text: "[+] Por favor adicione uma musica!" })
                .setColor("Red");
            await interaction.reply({
                embeds: [embed]
            })
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = Stop;