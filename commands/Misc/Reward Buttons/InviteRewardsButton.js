module.exports = {
name: "InviteRewardsButton",
type: 'interaction',
prototype: 'button',
code: `
$interactionUpdate[;
{newEmbed:
{title:Invite Rewards}
{description:- 1 Invite: 1 Event Reward
- 2 Invites: 3 Event Rewards
- 5 Invites: 10 Event Rewards
- 7 Invites: 14 Event Rewards
- 10 Invites: Inviter Role & 20 Event Rewards
- 15 Invites: 30 Event Rewards
- 20 Invites: 45 Event Rewards
- 25 Invites: 80 Event Rewards
- 30 Invites: The House Inviter & 200 Event Rewards

To Claim These. Just Open A Ticket In <#968358988901154846> And Select The \`General\` Option

To View The \`During-Event\` Rewards. Please Click The \`All Rewards\` Button}
}
{color:$getVar[defaultcolor]};
{actionRow:
{button:Event Rewards:2:EventRewardsButton:no}
{button:Invite Rewards:2:InviteRewardsButton:yes}
{button:All Rewards:2:AllRewardsButton:no}
}
;;everyone]
`
}