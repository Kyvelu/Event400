module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `
$if[$getUserVar[xp]>=$getUserVar[reqxp]]

$setUserVar[reqxp;$math[$getUserVar[reqxp]+$truncate[$math[$getUserVar[reqxp]*1/2]]]]

$setUserVar[xp;0]

$setUserVar[level;$math[$getUserVar[level]+1]]

<@$authorID> Has Leveled Up! They Are Now Level **$math[$getUserVar[level]+1]**!

$else

$endif

$setUserVar[xp;$math[$getUserVar[xp]+$random[5;10]]]

$onlyForChannels[918706208435740722;]
`
}