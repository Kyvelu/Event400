module.exports = {
name: "AllRewardsButton",
type: 'interaction',
prototype: 'button',
code: `
$interactionUpdate[;
{newEmbed:
{title:All Rewards}
{description:- Being Active In Chat
- We choose people randomly who are active in general to reward them. Only staff can reward people.

Click The Other Buttons To View Other Rewards}
}
{color:$getVar[defaultcolor]};
{actionRow:
{button:Event Rewards:2:EventRewardsButton:no}
{button:Invite Rewards:2:InviteRewardsButton:no}
{button:All Rewards:2:AllRewardsButton:yes}
}
;;everyone]
`
}