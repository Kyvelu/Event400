module.exports = {
name: "profile",
type: 'interaction',
prototype: 'slash',
$if: "v4",
code: `
$if[$slashOption[user]==]

$interactionReply[;
{newEmbed:
{title:Your Event 400 Profile}
{field:Experience:
- Level\\: **$getUserVar[level]**
- XP\\: **$getUserVar[xp]**
:no}

{field:Inventory:
- Rewards\\: **$getUserVar[rewards]**
:no}

{field:Event Misc:
- Tokens\\: **$getUserVar[eventTokens]**
- Credits\\: **$getUserVar[userCredits]**
:no}
{color:$getVar[defaultcolor]}
}
;;;everyone;no]

$else

$interactionReply[;
{newEmbed:
{title:$userTag[$slashOption[user]]'s Event 400 Profile}
{field:Experience:
- Level\\: **$getUserVar[level;$slashOption[user]]**
- XP\\: **$getUserVar[xp;$slashOption[user]]**
:no}
{field:Inventory:
- Rewards\\: **$getUserVar[rewards;$slashOption[user]]**
:no}
{field:Event Misc:
- Tokens\\: **$getUserVar[eventTokens;$slashOption[user]]**
- Credits\\: **$getUserVar[userCredits;$slashOption[user]]**
:no}
{color:$getVar[defaultcolor]}
}
;;;everyone;no]

$endif
`
}