const { SlashCommandBuilder } = require("@discordjs/builders");

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