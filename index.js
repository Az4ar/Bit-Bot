<<<<<<< HEAD
const { REST } = require('@discordjs/rest');
=======
const {REST} = require('@discordjs/rest');
>>>>>>> 575e3ef64a76ffa22f3081d439473c2eeb0ff4aa
const { Routes } = require('discord-api-types/v9');
const { Collection } = require('discord.js');
const { Player } = require('discord-player');
const config = require('./config.json');
const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');


<<<<<<< HEAD
const client = new Discord.Client({ intents: [1, 512, 32768, 2, 128] });

const commands = [];
client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
=======
const client = new Discord.Client({ intents: [1, 512, 32768, 2, 128 ] });

const commands = [];
client.commands = new Collection();
 
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
>>>>>>> 575e3ef64a76ffa22f3081d439473c2eeb0ff4aa
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    client.commands.set(command.data.name, command);
    commands.push(command.data.toJSON());
}

const ytdl = {
    ytdlOptions: {
<<<<<<< HEAD
        quality: "highestaudio",
=======
        quality:"highestaudio",
>>>>>>> 575e3ef64a76ffa22f3081d439473c2eeb0ff4aa
        highWaterMark: 1 << 25,
    }
}

client.player = new Player(client, ytdl);

client.on("ready", () => {
    const guild_ids = client.guilds.cache.map(guild => guild.id);


<<<<<<< HEAD
    const rest = new REST({ version: '10' }).setToken(config.token);
    for (const guildId of guild_ids) {
        rest.put(Routes.applicationGuildCommands(config.client_id, guildId),
            { body: commands })
            .then(() => console.log('Comandos atualizados com sucesso!!👾👾 '))
            .catch(console.error);
=======
    const rest = new REST({version: '10'}).setToken(config.token);
    for (const guildId of guild_ids)
    {
        rest.put(Routes.applicationGuildCommands(config.client_id, guildId), 
            {body: commands})
        .then(() => console.log('Comandos atualizados com sucesso!!👾👾 '))
        .catch(console.error);
>>>>>>> 575e3ef64a76ffa22f3081d439473c2eeb0ff4aa
    }

    console.log(`[+] ** ${client.user.username} ** iniciado com sucesso 👾 👾`)
});

client.on("interactionCreate", async interaction => {
<<<<<<< HEAD
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute({ client, interaction });
    }
    catch (error) {
=======
    if(!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
 
    if(!command) return;

    try
    {
        await command.execute({client, interaction});
    }
    catch(error)
    {
>>>>>>> 575e3ef64a76ffa22f3081d439473c2eeb0ff4aa
        console.error(error);
    }
});

client.login(config.token); 