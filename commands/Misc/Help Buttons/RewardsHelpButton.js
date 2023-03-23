module.exports = {
name: "RewardsHelpButton",
type: 'interaction',
prototype: 'button',
code: `
$interactionUpdate[;
{newEmbed:
{title:Event 400 Rewards}
{description:
These are the event rewards. To claim these please open a ticket and select the \`General\` option in <#968358988901154846>!

Run </rewards:1078019868927991908> To View Event Rewards!
\`\`\`- Please note that we will add more rewards during the event! So keep an eye out for announcements!\`\`\`
}
{color:$getVar[defaultcolor]}
}
;
{actionRow:
{button:Grinding:2:GrindingHelpButton:no}
{button:Rewards:2:RewardsHelpButton:yes}
{button:Leveling:2:LevelingHelpButton:no}
{button:Information:2:InformationHelpButton:no}
}
;;everyone]
`
}