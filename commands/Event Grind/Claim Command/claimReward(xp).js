module.exports = {
name: "claim",
type: 'interaction',
prototype: 'slash',
$if: "v4",
code: `
$if[$getUserVar[rewards]==0]

$else

$setUserVar[xp;$math[$getUserVar[xp]+$random[50;100]]]

$endif
`
}