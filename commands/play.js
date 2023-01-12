const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
const { QueryType } = require("discord-player");

<<<<<<< HEAD
const Play = {
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
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("playlist")
                .setDescription("Add uma playlist do Youtube")
                .addStringOption((option) => option.setName("playlist").setDescription("Toque uma playlist").setRequired(true))
        ),

    execute: async ({ client, interaction }) => {
        try {
            if (!interaction.member.voice.channel) return interaction.reply("Entre em um canal de voz para começar a festa🎈🎈🎈");

=======

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
 
>>>>>>> 575e3ef64a76ffa22f3081d439473c2eeb0ff4aa
            const queue = await client.player.createQueue(interaction.guildId);

            if (!queue.connection) await queue.connect(interaction.member.voice.channel);

            let embed = new Discord.EmbedBuilder();

            if (interaction.options.getSubcommand() === "song") {
                let url = interaction.options.getString("url");
<<<<<<< HEAD

                const result = await client.player.search(url, {
                    requestedBy: interaction.user,
                    searchEngine: QueryType.AUTO
                })

                if (result.tracks.length === 0 || result.tracks == undefined) {
                    embed
                        .setDescription("**⛔ Nenhuma musica encontrada⛔**")
                        .setFooter({ text: "[+] Por favor adicione uma musica para começar a festa!!" })
                        .setColor("Red");

                    return await interaction.reply({ embeds: [embed] });
                }

                const song = result.tracks[0];

                await queue.addTrack(song)
                embed
                    .setDescription(`**[${song.title}](${song.url})** Adicionada a Playlist  👾👾👾`)
                    .setFooter({ text: `Duração da musica: ${song.duration}` })
                    .setColor("Random")
                    .setThumbnail(song.thumbnail);
                    interaction.reply({embeds: [embed]})
            }
            else if (interaction.options.getSubcommand() === "src") {
                let url = interaction.options.getString("searchterms");

=======
    
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
                
>>>>>>> 575e3ef64a76ffa22f3081d439473c2eeb0ff4aa
                const result = await client.player.search(url, {
                    requestedBy: interaction.user,
                    searchEngine: QueryType.AUTO
                })

<<<<<<< HEAD
                if (result.tracks.length === 0) {
                    embed
                        .setDescription("**⛔ Nenhuma musica encontrada⛔**")
                        .setFooter({ text: "[+] Por favor adicione uma musica para começar a festa!!" })
                        .setColor("Red");

                    return await interaction.reply({ embeds: [embed] });
                }

=======
                if (result.tracks.length === 0)
                    return interaction.editReply("Sem resultados")
                
>>>>>>> 575e3ef64a76ffa22f3081d439473c2eeb0ff4aa
                const song = result.tracks[0]

                await queue.addTrack(song)
                embed
                    .setDescription(`**[${song.title}](${song.url})** Adicionada a Playlist  👾👾👾`)
                    .setThumbnail(song.thumbnail)
<<<<<<< HEAD
                    .setFooter({ text: `Duração: ${song.duration}` })
                    .setColor("Random")
                    interaction.reply({embeds: [embed]})
            }
            else if (interaction.options.getSubcommand() == "playlist") {
                let url = interaction.options.getString("playlist");

                const result = await client.player.search(url, {
                    requestedBy: interaction.user,
                    searchEngine: QueryType.YOUTUBE_PLAYLIST
                })

                if (result.tracks.length <= 1) {
                    embed
                        .setDescription("**⛔ Nenhuma musica encontrada ou isso não é uma playlist ⛔**")
                        .setFooter({ text: "[+] Por favor adicione uma playlist para começar a festa!!" })
                        .setColor("Red");
                    interaction.reply({ embeds: [embed] });
                }

                const songs = result.tracks

                await songs.forEach(song => {
                    queue.addTrack(song)
                    embed
                        .setDescription(`**Playlist: [${song.playlist.title}](${song.url})  😎 **`)
                        .setFooter({ text: `Autor: ${song.author}` })
                        .setColor("Random")
                        .setThumbnail(song.thumbnail)
                });

            }

            if (!queue.playing) await queue.play();

        } catch (error) {
            let embed = new Discord.EmbedBuilder()
                .setAuthor(client.user.usename)
                .setColor("Random")
                .setDescription('Eita bugou aqui ;-;');
=======
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
>>>>>>> 575e3ef64a76ffa22f3081d439473c2eeb0ff4aa
            await interaction.reply({
                embeds: [embed]
            })
        }
<<<<<<< HEAD
    },
}

module.exports = Play;
=======
	},
} 
>>>>>>> 575e3ef64a76ffa22f3081d439473c2eeb0ff4aa
