const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Vastaa pingiin'),
	async execute(interaction) {
		await interaction.reply('Pongia perkele');
	},
};