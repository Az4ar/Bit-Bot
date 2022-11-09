const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('stop')
    .setDescription(`Interrompe a musica`),
    execute: async({client, interaction}) => {
        try {
            let queue = client.player.getQueue(interaction.guild.id);

            if (!interaction.member.voice.channel) return interaction.reply("Entre em um canal de voz para começar a festa🎈🎈🎈");

            queue.stop();
        } catch(err){
            console.log(err);
        }
    }
}