let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • INDOSAT [.owner]
│ • Telkomsel [.owner]
╰────

╭─「 Donasi • Non Pulsa 」
│ • #owner
│ • Sawerr Cuyy
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi','donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
