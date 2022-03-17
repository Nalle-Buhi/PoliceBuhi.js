module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Kirjauduttu sisää ebin ${client.user.tag}`);
	},
};
