const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Collection } = require('discord.js');
const { Player } = require('discord-player');
const config = require('./config.json');
const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');


const client = new Discord.Client({ intents: [1, 512, 32768, 2, 128] });

const commands = [];
client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    client.commands.set(command.data.name, command);
    commands.push(command.data.toJSON());
}

const ytdl = {
    ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25,
    }
}

client.player = new Player(client, ytdl);

client.on("ready", () => {
    const guild_ids = client.guilds.cache.map(guild => guild.id);


    const rest = new REST({ version: '10' }).setToken(config.token);
    for (const guildId of guild_ids) {
        rest.put(Routes.applicationGuildCommands(config.client_id, guildId),
            { body: commands })
            .then(() => console.log('Comandos atualizados com sucesso!!👾👾 '))
            .catch(console.error);
    }

    console.log(`[+] ** ${client.user.username} ** iniciado com sucesso 👾 👾`)
});

client.on("interactionCreate", async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute({ client, interaction });
    }
    catch (error) {
        console.error(error);
    }
});

client.login(config.token); 