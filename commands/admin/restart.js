const {
    ActionRowBuilder,
    ApplicationCommandType,
    ButtonBuilder,
    ButtonStyle,
    Colors,
    PermissionsBitField
} = require('discord.js');
const config = require('../../config.json');

module.exports = {
    name: 'restart',
    description: 'Restart gönderir.',
    type: ApplicationCommandType.ChatInput,
    execute: async (client, interaction, args) => {
        
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({
            cotent: `Bu komutu çalıştırmak için izniniz yok!`
        })

        interaction.channel.send({
            embeds: [{
                title: "Sunucumuza Restart Atılıyor",
                description: "FiveM:  \n\nSunucumuza restart atılıyor. Lütfen güvenli çıkış yapın.\n\n**Keyifli oyunlar dileriz.**\nHerhangi bir sorunda <#1277789483269357670> kanalından bize ulaşabilirsiniz.",
                footer: {
                    text: "discord.gg/ravenz"
                },
                color: Colors.Blurple,
                image: {
                    url: config.restartbanner
                }
            }]
        })
        interaction.channel.send("@everyone")
    }
}