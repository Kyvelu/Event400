const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
	token: "CwnXaeMFL52i0Lb2KYm0rXfuHrX-2p-c2RUYirZTbAbYkal7QHd8jBy4Sq6FJzgH",
	prefix: ["e4!"],
	intents: "all"
})

bot.onMessage()

//Bot Variables

bot.variables({
	defaultcolor: "ff0000",
    userCredits: 0,
    xp: 0,
    level: 0,
    reqxp: 50,
    rewards: 0,
    eventTokens: 0,
})

//Bot Status

bot.status({
	text: "Event 400",
    type: "PLAYING",
})

//Command Loaders

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")
bot.onInteractionCreate()

bot.readyCommand({
	channel: "",
    code: `
$createApplicationCommand[688424089458966623;claim;Claim A Reward;true]
$createApplicationCommand[688424089458966623;rewards;View Event Rewards;true]
$createApplicationCommand[688424089458966623;leaderboard;View Event Leaderboard;true]
$createApplicationCommand[688424089458966623;help;Event 400 Help;true]
$createApplicationCommand[688424089458966623;grind;Event Grinding;true]

$createApplicationCommand[688424089458966623;profile;View Your Profile or Someone Else's;true;slash;[
{
"name" : "user",
"description" : "Select A User To View",
"type" : "USER",
"required" : false
}
]]

$createApplicationCommand[688424089458966623;rank;View Your Rank or Someone Else's;true;slash;[
{
"name" : "user",
"description" : "Select A User To View",
"type" : "USER",
"required" : false
}
]]
`
})