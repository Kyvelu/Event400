module.exports = {
name: "LevelingHelpButton",
type: 'interaction',
prototype: 'button',
code: `
$interactionUpdate[;
{newEmbed:
{title:Event 400 Leveling}
{description:
Level Up By Being Active In <#918706208435740722>! These rewards are automatically claimed!
}
{color:$getVar[defaultcolor]}
}
;
{actionRow:
{button:Grinding:2:GrindingHelpButton:no}
{button:Rewards:2:RewardsHelpButton:no}
{button:Leveling:2:LevelingHelpButton:yes}
{button:Information:2:InformationHelpButton:no}
}
;;everyone]
`
}