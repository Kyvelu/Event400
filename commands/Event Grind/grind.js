module.exports = {
name: "grind",
type: 'interaction',
prototype: 'slash',
$if: "v4",
code: `
$if[$getUserVar[xp]>=$getUserVar[reqxp]]

$setUserVar[reqxp;$math[$getUserVar[reqxp]+$truncate[$math[$getUserVar[reqxp]*1/2]]]]

$setUserVar[xp;0]

$setUserVar[level;$math[$getUserVar[level]+1]]

<@$authorID> Has Leveled Up! They Are Now Level **$math[$getUserVar[level]+1]**!

$else

$endif

$interactionReply[;
{newEmbed:
{title:Event Grinding}
{description:
$randomText[
You wandered into the wilderness and found **$random[1;10]** XP. Were you drunk?
$setUserVar[xp;$math[$getUserVar[xp]+$random[1;10]]];

You accidentally spilled horse milk and barfed out **$random[1;10]** XP. I think you were lactose intolerant.
$setUserVar[xp;$math[$getUserVar[xp]-$random[1;10]]];

The Gods decided you had a bad day. LMFAO. So you were given **$random[30;50]** XP! You are one lucky person.
$setUserVar[xp;$math[$getUserVar[xp]+$random[30;50]]];

You had a potion in hand and decided to drink it. It gave you **$random[1;10]** XP. What was in that dink?
$setUserVar[xp;$math[$getUserVar[xp]+$random[1;10]]];

The staff team thinks you were not active enough so you duked out **$random[1;10]** XP. What a loser. Hurry up and start talking in <#918706208435740722>!
$setUserVar[xp;$math[$getUserVar[xp]-$random[1;10]]];

You started to daze off and fell into a convienient black hole just 6 inches away from you. It suck out **$random[1;10]** XP from you. What a shame.
$setUserVar[xp;$math[$getUserVar[xp]-$random[1;10]]];

You grinded for 69 hours and passed out. You drooled out **$random[1;10]** XP. What a daze it was.
$setUserVar[xp;$math[$getUserVar[xp]-$random[1;10]]];

You grinded for so long that staff started noticing you and gave you something for free. You earned **$random[1;10]** XP! People are so jealous!
$setUserVar[xp;$math[$getUserVar[xp]+$random[1;10]]];

Your mom found you on your phone at night you lost **$random[1;10]** XP! What a L mom.
$setUserVar[xp;$math[$getUserVar[xp]-$random[1;10]]];

You posted something on social media and got facebook famous LMFAO! Now your parents are giving you money, I mean XP for free! You gotten **$random[1;10]** XP! Your parents are the best!
$setUserVar[xp;$math[$getUserVar[xp]+$random[1;10]]]
]
}
{color:$getVar[defaultcolor]}
}
;;;everyone;no]

$if[$authorID!=$botOwnerID]

$cooldown[5m;{
"content": "WAIT Slowdown! Your on cooldown! Wait **%time%** to run this command again!",
"options": {
"interaction": true
}
}]

$else
$endif
`
}