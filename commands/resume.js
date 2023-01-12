const { SlashCommandBuilder } = require('@discordjs/builders');
<<<<<<< HEAD
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
            .setDescription("**⛔ Nenhuma musica para despausar encontrada ⛔**")
            .setFooter({ text: "[+] Por favor adicione uma musica para começar a festa!!" })
            .setColor("Red");
            return interaction.reply({ embeds: [embed] });
        }

        await queue.setPaused(false)

        const song = queue.current;
        embed
        .setDescription(`** A musica ${song.title} foi despausada! ⏯**`)
        .setFooter({ text: "Som na caixa DJ Chrisy Chris 📀🎶🎛️🎧" })
        .setColor("Green");
        await interaction.reply({embeds: [embed]});
    }
}

module.exports = Resume;
=======

module.exports = {
    data: new SlashCommandBuilder()
    .setName("resume")
    .setDescription("Play na musica pausada"),

    execute: async ({client, interaction}) => {
        const queue = client.player.getQueue(interaction.guildId);
        const song = queue.current;

        if (!queue) return;

        queue.setPaused(false)
 
        await interaction.reply(`A musica ${song.title} foi despausada!`);
    }
}
>>>>>>> 575e3ef64a76ffa22f3081d439473c2eeb0ff4aa
