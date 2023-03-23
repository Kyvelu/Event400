module.exports = {
name: "rank",
type: 'interaction',
prototype: 'slash',
$if: "v4",
code: `
$if[$slashOption[user]==]

$interactionReply[;
{newEmbed:
{title:Your Event 400 Rank}
{description:Level Up By Being Active In <#918706208435740722>!}
{field:Leveling Information:
Current Level\\: **$getUserVar[level]**
XP\\: \`$getUserVar[xp]/$getUserVar[reqxp]\`
:no}
{thumbnail:$userAvatar}
{color:$getVar[defaultcolor]}
}
;;;everyone;no]

$else

$interactionReply[;
{newEmbed:
{title:$userTag[$slashOption[user]]'s Event 400 Rank}
{description:Level Up By Being Active In <#918706208435740722>!}
{field:Leveling Information:
Current Level\\: **$getUserVar[level;$slashOption[user]]**
XP\\: \`$getUserVar[xp;$slashOption[user]]/$getUserVar[reqxp;$slashOption[user]]\`
:no}
{thumbnail:$userAvatar[$slashOption[user]]}
{color:$getVar[defaultcolor]}
}
;;;everyone;no]

$endif
`
}