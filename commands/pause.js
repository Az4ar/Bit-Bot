const { SlashCommandBuilder } = require("@discordjs/builders");
<<<<<<< HEAD
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
=======

module.exports = {
    data: new SlashCommandBuilder()
    .setName("pause")
    .setDescription("Pausa o som atual"),


    execute: async ({client, interaction}) => {
        const queue = client.player.getQueue(interaction.guildId);
        const song = queue.current;

        if (!queue) return;

        queue.setPaused(true)
 
        await interaction.reply(`A musica ${song.title} foi pausada!`);
    }
}
>>>>>>> 575e3ef64a76ffa22f3081d439473c2eeb0ff4aa
