const { SlashCommandBuilder } = require('@discordjs/builders');

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