module.exports = {
name: "InformationHelpButton",
type: 'interaction',
prototype: 'button',
code: `
$interactionUpdate[;
{newEmbed:
{title:Event 400 Information}
{description:
Opening Information: [https://discord.com/channels/688424089458966623/1077725892886937670/1077729627436498974](Click Here)

FAQ: [https://discord.com/channels/688424089458966623/1077725892886937670/1077730411360297030](Click Here)

Rewards: [https://discord.com/channels/688424089458966623/1077725892886937670/1077734454853906463](Click Here)

Also Please Leave Suggestions, Ideas, Or Questions In <#1077665690619744286>. You get rewarded!
}
{color:$getVar[defaultcolor]}
}
;
{actionRow:
{button:Grinding:2:GrindingHelpButton:no}
{button:Rewards:2:RewardsHelpButton:no}
{button:Leveling:2:LevelingHelpButton:no}
{button:Information:2:InformationHelpButton:yes}
}
;;everyone]
`
}