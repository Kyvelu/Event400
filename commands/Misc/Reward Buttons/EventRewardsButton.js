module.exports = {
name: "EventRewardsButton",
type: 'interaction',
prototype: 'button',
code: `
$interactionUpdate[;
{newEmbed:
{title:Event Rewards}
{description:- 1st Place: Custom Role & Event Winner Role & Nitro
- 2nd Place: Custom Role & 20k Leveling XP
- 3rd Place: Custom Role & 17k Leveling XP
- 4th Place: 15k Leveling XP
- 5th Place: 13k Leveling XP
- 6th Place: 10k Leveling XP
- 7th Place: 7k Leveling XP
- 8th Place: 5k Leveling XP
- 9th Place: 3k Leveling XP
- 10th Place: 1k Leveling XP
- Participation: You All Get 500 Leveling XP For Participating

To Claim These. Just Open A Ticket In <#968358988901154846> And Select The \`General\` Option

To View The \`During-Event\` Rewards. Please Click The \`All Rewards\` Button}
}
{color:$getVar[defaultcolor]};
{actionRow:
{button:Event Rewards:2:EventRewardsButton:yes}
{button:Invite Rewards:2:InviteRewardsButton:no}
{button:All Rewards:2:AllRewardsButton:no}
}
;;everyone]
`
}