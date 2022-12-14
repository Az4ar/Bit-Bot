const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

const Resume = {
    data: new SlashCommandBuilder()
        .setName("resume")
        .setDescription("Play na musica pausada"),

    execute: async ({ client, interaction }) => {
        let embed = new Discord.EmbedBuilder();
        const queue = client.player.getQueue(interaction.guildId);
        const isPlaying = queue;

        if (isPlaying == undefined) {
            embed
            .setDescription("**â Nenhuma musica para despausar encontrada â**")
            .setFooter({ text: "[+] Por favor adicione uma musica para comeÃ§ar a festa!!" })
            .setColor("Red");
            return interaction.reply({ embeds: [embed] });
        }

        await queue.setPaused(false)

        const song = queue.current;
        embed
        .setDescription(`** A musica ${song.title} foi despausada! â¯**`)
        .setFooter({ text: "Som na caixa DJ Chrisy Chris ðð¶ðï¸ð§" })
        .setColor("Green");
        await interaction.reply({embeds: [embed]});
    }
}

module.exports = Resume;