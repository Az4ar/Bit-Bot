const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");

const Pause = {
    data: new SlashCommandBuilder()
        .setName("pause")
        .setDescription("Pausa o som atual"),

    execute: async ({ client, interaction }) => {
        let embed = new Discord.EmbedBuilder();
        const queue = client.player.getQueue(interaction.guildId);
        const isPlaying = queue;

        if (isPlaying == undefined) {
            embed
            .setDescription("**⛔ Nenhuma musica para pausar encontrada ⛔**")
            .setFooter({ text: "[+] Por favor adicione uma musica para começar a festa!!" })
            .setColor("Red");
            return interaction.reply({embeds: [embed]});
        }

        await queue.setPaused(true)

        const song = queue.current;
        embed
        .setDescription(`** A musica ${song.title} foi pausada! ⏸️ **`)
        .setFooter({ text: "Despause para curtirmos esse maravilhoso som" })
        .setColor("Red");
        await interaction.reply({embeds: [embed]});
    }
}

module.exports = Pause;