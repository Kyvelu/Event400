module.exports = {
name: "claim",
type: 'interaction',
prototype: 'slash',
$if: "v4",
code: `
$if[$getUserVar[rewards]==0]

$interactionReply[;
{newEmbed:
{title:You Are Empty!}
{description:You have no more rewards to claim. <:CatSadThumbsUp:1020096687282335834>
Please grind some more to claim more rewards!}
{field:Rewards Contain\\::
\`50-100 XP\`
\`1 Event Token\`
\`50-100 Event Credits\`:no}
{color:$getVar[defaultcolor]}
}
;;;everyone;no]

$else

$setUserVar[eventTokens;$math[$getUserVar[eventTokens]+1]]
$setUserVar[rewards;$math[$getUserVar[rewards]-1]]

$interactionReply[;
{newEmbed:
{title:Reward Claimed!}
{description:You Have Claimed Your Reward!
To check your rewards, run </profile:1078113957878956104>
You can claim another reward if you have another.}
}
{color:$getVar[defaultcolor]}
}
;;;everyone;no]

$endif
`
}