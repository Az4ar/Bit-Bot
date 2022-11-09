const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
const { QueryType } = require("discord-player");


module.exports = {
	data: new SlashCommandBuilder()
		.setName("play")
		.setDescription("👾 Bucando musica no Youtube...")
		.addSubcommand(subcommand =>
			subcommand
				.setName("src")
				.setDescription("Busque uma musica e coloque pra tocar 👾👾")
				.addStringOption(option =>
					option.setName("searchterms").setDescription("busque por palavra-chave").setRequired(true)
				)
		)
		.addSubcommand(subcommand =>
			subcommand
				.setName("song")
				.setDescription("Musica do YT")
				.addStringOption(option => option.setName("url").setDescription("URL para o som 👾").setRequired(true))
		),
	execute: async ({ client, interaction }) => {
        try {
            if (!interaction.member.voice.channel) return interaction.reply("Entre em um canal de voz para começar a festa🎈🎈🎈");
 
            const queue = await client.player.createQueue(interaction.guildId);

            if (!queue.connection) await queue.connect(interaction.member.voice.channel);

            let embed = new Discord.EmbedBuilder();

            if (interaction.options.getSubcommand() === "song") {
                let url = interaction.options.getString("url");
    
                const result = await client.player.search(url, {
                    requestedBy: interaction.user,
                    searchEngine: QueryType.YOUTUBE_VIDEO
                })

                if (result.tracks.length === 0)
                    return interaction.reply("sem resultados");

                const song = result.tracks[0];
                await queue.addTrack(song)
                embed
                    .setDescription(`**[${song.title}](${song.url})** Adicionada a Playlist  👾👾👾`)
                    .setFooter({ text: `Duração da musica: ${song.duration}`}) 
                    .setColor("Random")
                    .setThumbnail(song.thumbnail)
            }
            else if (interaction.options.getSubcommand() === "src") {
    
                let url = interaction.options.getString("searchterms"); 
                
                const result = await client.player.search(url, {
                    requestedBy: interaction.user,
                    searchEngine: QueryType.AUTO
                })

                if (result.tracks.length === 0)
                    return interaction.editReply("Sem resultados")
                
                const song = result.tracks[0]

                await queue.addTrack(song)
                embed
                    .setDescription(`**[${song.title}](${song.url})** Adicionada a Playlist  👾👾👾`)
                    .setThumbnail(song.thumbnail)
                    .setFooter({ text: `Duração: ${song.duration}`})
                    .setColor("Random")
            }

            if (!queue.playing) await queue.play();
            
            await interaction.reply({
                embeds: [embed]
            })
            
        } catch (error) {
            console.log(error);
            let embed = new Discord.EmbedBuilder()
            .setAuthor(client.user.usename)
            .setColor("Random")
            .setDescription('Eita bugou aqui ;-;');
            await interaction.reply({
                embeds: [embed]
            })
        }
	},
} 