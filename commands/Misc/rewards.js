module.exports = {
name: "rewards",
type: 'interaction',
prototype: 'slash',
code: `
$interactionReply[;
{newEmbed:
{title:Event 400 Rewards}
{description:
These are the event rewards. To claim these please open a ticket and select the \`General\` option in <#968358988901154846>!
\`\`\`- Please note that we will add more rewards during the event! So keep an eye out for announcements!\`\`\`
}
{color:$getVar[defaultcolor]}
}
;
{actionRow:
{button:Event Rewards:2:EventRewardsButton:no}
{button:Invite Rewards:2:InviteRewardsButton:no}
{button:All Rewards:2:AllRewardsButton:no}
}
;;everyone;no]
`
}