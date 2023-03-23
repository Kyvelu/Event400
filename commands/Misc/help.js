module.exports = {
name: "help",
type: 'interaction',
prototype: 'slash',
code: `
$interactionReply[;
{newEmbed:
{title:Event 400 Help}
{description:This is the help menu for <#1076699929218646147>.
If you have any questions please ask in the forum: <#1077665690619744286>.

Please select what you need help on via the buttons below:}
{color:$getVar[defaultcolor]}
}
;
{actionRow:
{button:Grinding:2:GrindingHelpButton:no}
{button:Rewards:2:RewardsHelpButton:no}
{button:Leveling:2:LevelingHelpButton:no}
{button:Information:2:InformationHelpButton:no}
}
;;everyone;no]
`
}