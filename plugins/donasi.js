let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • INDOSAT [.owner]
│ • Goapay [.owner]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/
│ • https://saweria.co/
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi','donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
