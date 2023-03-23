module.exports = {
name: "leaderboard",
type: 'interaction',
prototype: 'slash',
code: `
$interactionReply[;
{newEmbed:
{title:Event Leaderboard}
{description:$userLeaderboard[$guildID;level;asc;\`\`\`{top}) {username} - Level {value}\`\`\`]}
{color:$getVar[defaultcolor]}
}
;;;everyone;no]
`
}